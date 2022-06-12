import { Line, getDatasetAtEvent } from "react-chartjs-2";
import { useRef } from 'react';
import Chart from 'chart.js/auto';

export const ChartDat = ({ chartData }) => {
    const chartRef = useRef();
    return (
        <div>
            <Line
                ref={chartRef}
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "The GDP Economic Indicator",
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: "right"
                        }
                    }
                }}
            />
        </div>
    );
};