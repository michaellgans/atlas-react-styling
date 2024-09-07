// PlayList Component

// Asset Imports
import { PlayListItem } from "./PlayListItem";

// Script Imports

// Returns a PlayList Component
export function PlayList() {
  // Define Hook
  return (
    <div className="play-list p-6">
      <PlayListItem />
    </div>
  );
}
