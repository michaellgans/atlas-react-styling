// PlayList Component

// Asset Imports
import { PlayListItem } from "./PlayListItem";

// Script Imports

// Returns a PlayList Component
export function PlayList() {
  // Define Hook
  return (
    <div className="play-list w-full p-6 sm:w-1/2 sm:border-l sm:border-muted-text">
      <h3 className="play-list-title mb-4 text-xl font-semibold">Playlist</h3>
      <div className="all-songs flex flex-col pr-4">
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
      </div>
    </div>
  );
}
