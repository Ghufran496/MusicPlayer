# PlanetQ Music Player

A modern web-based music player application built for PlanetQ Productions. This application allows users to upload, manage, and play music tracks with a sleek, responsive interface.

## 🎵 Live Demo

Visit the live application: [PlanetQ Radio](https://www.planetqradio.com/)

## 🚀 Features

- **User Authentication**: Secure login system using NextAuth.js
- **Music Streaming**: Play music tracks directly in the browser
- **Spotify Integration**: Support for embedding and playing Spotify tracks
- **Admin Dashboard**: Upload and manage music tracks
- **Responsive Design**: Works on desktop and mobile devices
- **Custom Thumbnails**: Upload and manage thumbnails for visual identity

## 🛠️ Tech Stack

### Frontend
- **Next.js**: React framework for server-side rendering and static site generation
- **React**: JavaScript library for building user interfaces
- **TailwindCSS**: Utility-first CSS framework for styling
- **React Player**: Component for playing various media types
- **React Toastify**: Toast notifications for user feedback

### Backend
- **Next.js API Routes**: Serverless API endpoints
- **MongoDB**: NoSQL database for storing user data, music links, and thumbnails
- **NextAuth.js**: Authentication solution for Next.js applications

### Deployment
- **Vercel/Netlify**: Hosting platform (assumed based on Next.js usage)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/MusicPlayer.git
cd MusicPlayer
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:
```
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# MongoDB
mongodb_username=your_mongodb_username
mongodb_password=your_mongodb_password
mongodb_clustername=your_cluster_name
mongodb_database=your_database_name
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Usage

1. **Authentication**: Users need to log in to access the music player
2. **Playing Music**: After logging in, users can play available tracks
3. **Admin Functions**: Administrators can upload new music links, manage thumbnails, and delete content

## 🧩 Project Structure

- `/components`: React components used throughout the application
- `/pages`: Next.js pages and API routes
- `/lib`: Utility functions (database connection, etc.)
- `/public`: Static assets (images, etc.)
- `/styles`: Global CSS styles

## 📄 License

This project is proprietary and developed for PlanetQ Productions.

## 👨‍💻 Developer

This website was developed for a client on Fiverr.

#Developed this website for my fiver client.
Click here to visit: 
<a href="https://www.planetqradio.com/">Visit here</a>

 
