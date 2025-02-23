import Player from "./components/Player.jsx";
import TimerChallanges from "./components/TimerChallenges.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallanges title="Easy" targetTime={1} />
        <TimerChallanges title="Not Easy" targetTime={5} />
        <TimerChallanges title="Getting tough" targetTime={10} />
        <TimerChallanges title="Profs" targetTime={15} />
      </div>
    </>
  );
}

export default App;
