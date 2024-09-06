// PlayListItem Component

// Asset Imports

// Script Imports

// Returns a PlayListItem Component
export function PlayListItem() {
  // Define Hook
  return (
    <div className="play-list-item">
      <div className="song-info">
        <div className="song-title">Song Title</div>
        <div className="genre">Genre</div>
      </div>
      <div className="play-time">8:41</div>
    </div>
  );
}
