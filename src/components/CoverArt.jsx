// CoverArt Component

// Asset Imports
import artSkeleton from "../assets/placeholder.svg";

// Script Imports

// Returns a CoverArt Component
export function CoverArt() {
  // Define Hook
  return (
    <div className="cover-art">
      <img
        src={artSkeleton}
        alt="Cover Art for Current Song"
        className="cover-art-image"
      />
    </div>
  );
}
