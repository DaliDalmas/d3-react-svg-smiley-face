
import './App.css';
import Face from '../components/Face';

function App() {
  const canvasHeight=720;
  const canvasWidth=720;
  return (
    <div className="App">
      <svg height={700} width={700}>
        <Face
          canvasHeight={canvasHeight}
          canvasWidth={canvasWidth}
          />
      </svg>
    </div>
  );
}

export default App;
