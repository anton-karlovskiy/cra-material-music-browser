
let rippleAnimation;
let heroAnimation;

// MEMO: inspired by https://stackoverflow.com/questions/27745438/how-to-compute-getboundingclientrect-without-considering-transforms
const getAdjustedBoundingClientReact = el => {
  const rect = el.getBoundingClientRect();
  const style = getComputedStyle(el);
  const tx = style.transform;

  if (tx) {
    let sx, sy, dx, dy;
    if (tx.startsWith("matrix3d(")) {
      const ta = tx.slice(9,-1).split(/, /);
      sx = +ta[0];
      sy = +ta[5];
      dx = +ta[12];
      dy = +ta[13];
    } else if (tx.startsWith("matrix(")) {
      const ta = tx.slice(7,-1).split(/, /);
      sx = +ta[0];
      sy = +ta[3];
      dx = +ta[4];
      dy = +ta[5];
    } else {
      return rect;
    }

    const to = style.transformOrigin;
    const x = rect.x - dx - (1 - sx) * parseFloat(to);
    const y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1));
    const w = sx ? rect.width / sx : el.offsetWidth;
    const h = sy ? rect.height / sy : el.offsetHeight;
    return {
      x: x,
      y: y,
      width: w,
      height: h,
      top: y,
      right: x + w,
      bottom: y + h,
      left: x
    };
  } else {
    return rect;
  }
};

const runRippleAnimation = ({ gesture = null, from, to }) => {
  let translateX, translateY;
  const fromRect = from.getBoundingClientRect();
  const toRect = to.getBoundingClientRect();
  
  if (gesture) {
    translateX = gesture.x - (toRect.left + (toRect.width / 2));
    translateY = gesture.y - (toRect.top + (toRect.height / 2));
  } else {
    translateX = (fromRect.left + (fromRect.width / 2)) -
      (toRect.left + (toRect.width / 2));
    translateY = (fromRect.top + (fromRect.height / 2)) -
      (toRect.top + (toRect.height / 2));
  }

  const translate = `translate(${translateX}px, ${translateY}px)`;
  const size = Math.max(
    toRect.width + Math.abs(translateX) * 2,
    toRect.height + Math.abs(translateY) * 2);
  const diameter = Math.sqrt(2 * size * size);
  const scaleX = diameter / toRect.width;
  const scaleY = diameter / toRect.height;
  const scale = `scale(${scaleX}, ${scaleY})`;

  const rippleAnimationKeyframes = new KeyframeEffect(
    to, [
      {'transform': `${translate} scale(0)`},
      {'transform': `${translate} ${scale}`}
    ], {
      duration: 500,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // TODO: the last keyframe's transform persisted probably due to display: none; of fullsizePageWithCard
      // TODO: research into neon-animated-pages more
      // fill: 'both'
      // TODO: tweak
      fill: 'backwards'
    }
  );

  to.style.transformOrigin = '50% 50%';
  to.style.borderRadius = '50%';

  rippleAnimation = new Animation(rippleAnimationKeyframes, document.timeline);
  rippleAnimation.play();

  rippleAnimation.onfinish = (() => {
    to.style.transformOrigin = '';
    to.style.borderRadius = '';
  });
};

const runHeroAnimation = ({ delay = 0, from, to }) => {
  const fromRect = from.getBoundingClientRect();
  // TODO: this might not be required once we resolve animation-fill-mode--not--working issue
  const toRect = getAdjustedBoundingClientReact(to);

  const deltaLeft = fromRect.left - toRect.left;
  const deltaTop = fromRect.top - toRect.top;
  const deltaWidth = fromRect.width / toRect.width;
  const deltaHeight = fromRect.height / toRect.height;

  const heroAnimationKeyframes = new KeyframeEffect(
    to, [
      {'transform': `translate(${deltaLeft}px, ${deltaTop}px) scale(${deltaWidth}, ${deltaHeight})`},
      {'transform': 'none'}
    ], {
      duration: 500,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      fill: 'both',
      delay
    }
  );

  to.style.transformOrigin = '0 0';
  to.style.zIndex = 10000;
  // MEMO: no need and bad effect of black background behind the tile
  // from.style.visibility = 'hidden';

  heroAnimation = new Animation(heroAnimationKeyframes, document.timeline);
  heroAnimation.play();

  heroAnimation.onfinish = (() => {
    to.style.zIndex = '';
    // TODO: tweak for unrendered from element
    if (from && from.style) {
      from.style.visibility = '';
    }
  });
};

export {
  runRippleAnimation,
  runHeroAnimation
};
