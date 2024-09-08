// PlayList Component

// Asset Imports
import { PlayListItem } from "./PlayListItem";

// Script Imports

// Returns a PlayList Component
export function PlayList() {
  // Define Hook
  return (
    <div className="play-list w-400 border-l p-6">
      <h3 className="play-list-title mb-4 text-lg font-semibold">Playlist</h3>
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
