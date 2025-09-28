# 🎵 Material Music - Apple Music Browser

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![React](https://img.shields.io/badge/React-16.13.1-blue.svg)](https://reactjs.org/)
[![PWA](https://img.shields.io/badge/PWA-Enabled-green.svg)](https://web.dev/progressive-web-apps/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Available-brightgreen.svg)](https://music.zaps.dev)

A modern, responsive Progressive Web App (PWA) for browsing Apple Music's latest releases, hot tracks, and top albums. Built with React and Material Design principles, featuring adaptive performance optimization and offline capabilities.

## ✨ Features

### 🎯 Core Functionality
- **Apple Music Integration**: Browse new releases, hot tracks, top albums, and coming soon content
- **Multi-Region Support**: Access music from 100+ countries and regions worldwide
- **Genre Filtering**: Filter by All, Country, and Heavy Metal genres
- **Flexible Results**: Choose from 12, 24, 60, or 96 results per query
- **Explicit Content Control**: Toggle explicit content filtering

### 🚀 Performance & UX
- **Adaptive Image Loading**: Automatically adjusts image quality based on network speed (2G/3G/4G)
- **Progressive Web App**: Installable on mobile and desktop devices
- **Offline Support**: Service worker caching for improved performance
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Favorites System**: Save and manage your favorite albums locally

### 🎨 User Interface
- **Material Design**: Clean, modern interface following Google's Material Design guidelines
- **Animated Grid Layout**: Smooth animations and transitions
- **Dark Theme**: Elegant dark background with optimized contrast
- **Accessibility**: Screen reader friendly with proper ARIA labels

## 🛠️ Technology Stack

- **Frontend**: React 16.13.1 with Hooks
- **Styling**: CSS3 with Material Design principles
- **Performance**: React Adaptive Hooks for network-aware loading
- **Caching**: Service Worker with Workbox
- **Deployment**: Firebase, Vercel, Netlify ready
- **Analytics**: Google Analytics integration

## 🚀 Quick Start

### Prerequisites
- Node.js 12+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anton-karlovskiy/cra-material-music-browser.git
   cd cra-material-music-browser
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
# Create production build
npm run build

# Deploy to Firebase
npm run firebase-deploy

# Deploy to Vercel
npm run vercel-deploy

# Deploy to Netlify
npm run netlify-deploy
```

## 📱 Live Demo

Experience Material Music in action:

- **Primary**: [music.zaps.dev](https://music.zaps.dev)
- **Firebase**: [cra-material-music-browser.web.app](https://cra-material-music-browser.web.app)
- **Firebase**: [cra-material-music-browser.web.app](https://cra-material-music-browser.firebaseapp.com)
- **Vercel**: [cra-material-music-browser.vercel.app](https://cra-material-music-browser.vercel.app)
- **Netlify**: [cra-material-music-browser.netlify.app](https://cra-material-music-browser.netlify.app)

## 🎵 How to Use

1. **Select Region**: Choose your country from 100+ supported regions
2. **Pick Feed Type**: 
   - New Releases - Latest album releases
   - Hot Tracks - Currently trending songs
   - Top Albums - Most popular albums
   - Top Songs - Chart-topping singles
   - Coming Soon - Upcoming releases
3. **Filter by Genre**: All, Country, or Heavy Metal
4. **Set Results**: Choose how many items to display (12-96)
5. **Toggle Explicit**: Enable/disable explicit content
6. **Search**: Click the search button to fetch results
7. **Save Favorites**: Star albums to save them for later

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_PROXY_URL=https://cors-anywhere.herokuapp.com
```

### Custom Proxy Setup
The app uses a CORS proxy to access Apple Music's RSS feeds. For production, consider setting up your own proxy server.

## 📊 Performance Features

### Network Adaptive Loading
- **2G Networks**: 100px images for faster loading
- **3G Networks**: 100px images for balanced performance
- **4G Networks**: 300px high-quality images
- **WiFi**: 300px high-quality images

### Caching Strategy
- Service Worker caches API responses
- Offline fallback for previously visited content
- Automatic cache invalidation and updates

## 🎨 Customization

### Adding New Genres
Edit `src/utils/constants/index.js`:

```javascript
const GENRE_OPTIONS = [
  { label: 'All', value: 'all' },
  { label: 'Country', value: 'country' },
  { label: 'Heavy Metal', value: 'heavy-metal' },
  { label: 'Your Genre', value: 'your-genre' } // Add your genre
];
```

### Styling Modifications
- Main styles: `src/App.css`
- Component styles: Individual `.css` files in component directories
- Material Design variables can be customized in CSS custom properties

## 📱 PWA Features

### Installation
- **Mobile**: Add to home screen from browser menu
- **Desktop**: Install prompt appears automatically
- **Chrome**: Click install button in address bar

### Offline Capabilities
- Previously viewed content remains accessible offline
- Favorites are stored locally and work offline
- Service worker provides background sync

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Maintain Material Design consistency
- Test on multiple devices and network conditions
- Ensure accessibility compliance

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Apple Music** for providing the RSS API
- **Google** for Material Design guidelines
- **React Team** for the amazing framework
- **Open Source Community** for inspiration and tools

## 🔗 Related Projects

- [Apple Music RSS API Documentation](https://rss.itunes.apple.com/)
- [Material Design Guidelines](https://material.io/design)
- [React Documentation](https://reactjs.org/docs)
- [PWA Best Practices](https://web.dev/progressive-web-apps/)

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/anton-karlovskiy/cra-material-music-browser/issues)
- **Discussions**: [GitHub Discussions](https://github.com/anton-karlovskiy/cra-material-music-browser/discussions)
- **Email**: support@example.com

---

**Made with ❤️ for music lovers everywhere**

*Discover new music, explore trending tracks, and never miss the latest releases with Material Music.*