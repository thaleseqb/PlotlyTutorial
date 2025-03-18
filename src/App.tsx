import './App.css';
import Graph from './Components/Plotly';
import TutorialPlotly from './Components/TutorialPlotly';

function App() {
  return (
    <div className="App">
      <Graph
        height={400}
        width={1000}
        title='Fancy graph'
      />
      <TutorialPlotly
        title="Growth Rate in Boys"
        xaxis={{title: "Age (years)"}}
        yaxis={{title: "Height (inches)"}}
      />
    </div>
  );
}

export default App;
