import Plot from "react-plotly.js";
import "./TutorialPlotly.css"
import { useState } from "react";
import { Data } from "plotly.js";

// Ao trabalhar com typescript lembre-se de garantir a tipagem estática das props.
// Typescript é uma linguagem que visa eliminar erros em tempo de desenvolvimento
// e a definição clara de tipos é primordial para mitigar possíveis erros.

interface IGraphOptions {
    xaxis: {title:string};
    yaxis: {title:string};
    title: string;
}

// Componentes React recebem 'props'. É possível utilizar as props para garantir o 
// reaproveitamento de código, passando nas props por exemplo o comprimento e altura
// e assim utilizando os componentes em diferentes páginas da aplicação frontend.

export default function TutorialPlotly({
    xaxis, yaxis, title
}: IGraphOptions) {
    
    // nesse caso (setGraphic) não foi usado. Mas caso fosse necessário alterar o estado
    // desse hook, pra atualizar o gráfico por exemplo, seria sim necessário utilizá-la.
    // Um exemplo clássico de quando esse dado poderia mudar ou ser atulizado é uma cha-
    // mada de API.

    const [graphic, setGraphic] = useState<Array<Data>>([
        {
            x: [1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18],
            y: [32, 37, 40.5, 43, 49, 54, 59, 63.5, 69.5, 73, 74],
            mode: "markers",
            type: "bar",
        }
    ]);

    const layout ={
        title,
        xaxis,
        yaxis
    };

    return (
        <div className="plotlyContainer">
            
            {/* É ideal definir constantes fora do return em um componente react
            para garantir a legibilidade do código */}

        <Plot
            data={graphic}
            layout={layout}
        />
        </div>
  );
}