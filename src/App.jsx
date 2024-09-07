import Footer from "./components/Footer";
import MusicPlayer from "./MusicPlayer";
import { PlayListItem } from "./components/PlayListItem";
import { CurrentlyPlaying } from "./components/CurrentlyPlaying";

function App() {
  return (
    <div className="flex h-full min-h-screen flex-col justify-between p-8">
      <MusicPlayer>
        <CurrentlyPlaying />
        <PlayListItem />
      </MusicPlayer>
      <Footer />
    </div>
  );
}

export default App;
