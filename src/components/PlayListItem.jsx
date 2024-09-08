// PlayListItem Component

// Asset Imports

// Script Imports

// Returns a PlayListItem Component
export function PlayListItem() {
  // Define Hook
  return (
    <div className="play-list-item mb-1 flex h-10 items-center justify-between rounded-md bg-slate-100 text-sm font-medium">
      <div className="song-info">
        <div className="song-title pb-0.5">Song Title</div>
        <div className="genre text-slate-500">Genre</div>
      </div>
      <div className="play-time text-slate-500">8:41</div>
    </div>
  );
}
