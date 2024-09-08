// Music Player Component

// Asset Imports

// Script Imports

// Returns a MusicPlayer Component
export default function MusicPlayer({ children }) {
  // Define Hooks
  return (
    <div className="music-player flex flex-col sm:flex-row max-w-4xl justify-center rounded-lg shadow-lg">
      {children}
    </div>
  );
}
