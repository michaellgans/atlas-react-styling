// Music Player Component

// Asset Imports

// Script Imports

// Returns a MusicPlayer Component
export default function MusicPlayer({ children }) {
  // Define Hooks
  return (
    <div className="music-player flex justify-center rounded-lg shadow-lg">
      {children}
    </div>
  );
}
