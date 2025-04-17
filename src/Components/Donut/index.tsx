import Plot from 'react-plotly.js';

interface IDonutChart {
    labels: Array<string>
    values: Array<number>
    sizeHole: number
    textinfo: 'text+percent' | 'text'
    title: string
    height: number
    width: number
    showlegend: boolean
}

// Obs: muito cuidado aqui com o que queremos mostrar no textinfo, essa biblioteca
// está fixando algumas strings como tipo de textinfo como por exemplo 'text+percent'

export default function DonutChart({
    labels,
    values,
    sizeHole,
    textinfo,
    title,
    height,
    width,
    showlegend
}: IDonutChart) {
  return (
    <Plot
      data={[
        {
          type: 'pie',
          labels,
          values,
          hole: sizeHole,
          textinfo
        }
      ]}
      layout={{
        title,
        height,
        width,
        showlegend,
      }}
    />
  );
};

;
