import Footer from "./components/Footer";
import MusicPlayer from "./MusicPlayer";
import { CoverArt } from "./components/CoverArt";
import { SongTitle } from "./components/SongTitle";
import { PlayControls } from "./components/PlayControls";
import { VolumeControl } from "./components/VolumeControl";

function App() {
  return (
    <div className="flex h-full min-h-screen flex-col justify-between p-8">
      <MusicPlayer />
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControl />
      <Footer />
    </div>
  );
}

export default App;
