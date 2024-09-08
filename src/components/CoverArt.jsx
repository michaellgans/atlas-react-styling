// CoverArt Component

// Asset Imports
import artSkeleton from "../assets/placeholder.svg";

// Script Imports

// Returns a CoverArt Component
export function CoverArt() {
  // Define Hook
  return (
    <div className="cover-art mb-6">
      <img
        src={artSkeleton}
        alt="Cover Art for Current Song"
        className="cover-art-image max-w-400 rounded-md"
      />
    </div>
  );
}
