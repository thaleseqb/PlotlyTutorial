import Plot from 'react-plotly.js';

interface IGraphOptions {
    width: number;
    height: number;
    title: string;
}

export default function Graph({width, height, title}: IGraphOptions) {

    const options = {
        width,
        height,
        title 
    }

    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={options}
      />
    );
}