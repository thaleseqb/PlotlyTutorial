import './App.css';
import DonutChart from './Components/Donut';
import Graph from './Components/Plotly';
import TutorialPlotly from './Components/TutorialPlotly';

function App() {

  const labels = ['Verde', 'Amarelo', 'Azul', 'Vermelho'];
  const percentsData = [10, 15, 20, 5];

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

      <DonutChart
        labels={labels}
        values={percentsData}
        sizeHole={0.4}
        textinfo='text+percent'
        height={400}
        width={500}
        title='Porcentagem das cores'
        showlegend={true}
      />

    </div>
  );
}

export default App;
