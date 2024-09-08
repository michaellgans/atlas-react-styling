// PlayListItem Component

// Asset Imports

// Script Imports

// Returns a PlayListItem Component
export function PlayListItem() {
  // Define Hook
  return (
    <div className="play-list-item mb-1 flex h-10 cursor-pointer items-center justify-between rounded-md text-sm font-medium hover:bg-hover active:bg-active dark:hover:bg-dark-hover dark:active:bg-dark-active">
      <div className="song-info">
        <div className="song-title pb-0.5">Song Title</div>
        <div className="genre text-muted-text dark:text-dark-muted-text">
          Genre
        </div>
      </div>
      <div className="play-time text-muted-text dark:text-dark-muted-text">
        8:41
      </div>
    </div>
  );
}
