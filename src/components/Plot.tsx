import React, {useEffect, useRef} from 'react';
import {Chart, ChartConfiguration, registerables} from 'chart.js/auto';
import './Plot.css';
import {PlotPropsInterface} from '../interfaces/PlotPropsInterface';

const Plot: React.FC<PlotPropsInterface> = ({hours, temperatures}) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<Chart>();

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            if (ctx) {
                Chart.register(...registerables);

                const gradientFill = ctx.createLinearGradient(0, 0, 0, chartRef.current.height);
                gradientFill.addColorStop(0, temperatures[0] > 0 ? '#ffe1c6' : '#c5d4ff');
                gradientFill.addColorStop(1, '#ffffff');

                const chartConfig: ChartConfiguration = {
                    type: 'line',
                    data: {
                        labels: hours.map((hour: number) => hour.toString()),
                        datasets: [
                            {
                                label: '',
                                data: temperatures,
                                borderWidth: 0,
                                pointRadius: 0,
                                pointHoverRadius: 0,
                                fill: true,
                                backgroundColor: gradientFill,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                                grid: {
                                    display: false,
                                },
                                ticks: {
                                    font: {
                                        size: 10,
                                    },
                                },
                            },
                            y: {
                                position: 'top',
                                grid: {
                                    display: false,
                                },
                                ticks: {
                                    font: {
                                        size: 8,
                                    },
                                },
                            },
                        },
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                    },
                };

                if (chartInstanceRef.current) {
                    chartInstanceRef.current.destroy();
                }

                chartInstanceRef.current = new Chart(ctx, chartConfig);
            }
        }
    }, [hours, temperatures]);

    return (
        <div className='plot-container'>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default Plot;
