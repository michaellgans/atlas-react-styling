// CurrentlyPlaying Component

// Asset Imports
import { CoverArt } from "./CoverArt";
import { PlayControls } from "./PlayControls";
import { SongTitle } from "./SongTitle";
import { VolumeControl } from "./VolumeControl";

// Script Imports

// Returns a CurrentlyPlaying Component
export function CurrentlyPlaying() {
  // Define Hook
  return (
    <div className="currently-playing p-6">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControl />
    </div>
  );
}
