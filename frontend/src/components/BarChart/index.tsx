import { useEffect } from 'react';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import salesServices from 'services/salesServices';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';

type ChartData = {
    labels: {
        categories: string[];
    };
    series: [
        {
            name: string;
            data: number[];
        },
    ];
};

const BarChart = () => {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
    };

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: [],
        },
        series: [
            {
                name: '% Sucess',
                data: [],
            },
        ],
    });

    const [chartLoading, setChartLoading] = useState(true);

    useEffect(() => {
        salesServices
            .getSucessBySellers()
            .then(response => {
                const data = response.data as SaleSuccess[];
                const treatedData = {
                    labels: {
                        categories: [],
                    },
                    series: [
                        {
                            name: '% Sucess',
                            data: [],
                        },
                    ],
                } as ChartData;
                data.map(elem => {
                    treatedData.labels.categories.push(elem.sellername);
                    treatedData.series[0].data.push(
                        round((100 * elem.deals) / elem.visited, 1),
                    );
                });
                setChartData(treatedData);
                setChartLoading(false);
            })
            .catch(error => console.log('Something went wrong', error));
    }, []);

    return (
        <div>
            {chartLoading ? (
                <h5 className="text-center mt-5">Loading...</h5>
            ) : (
                <Chart
                    options={{ ...options, xaxis: chartData.labels }}
                    series={chartData.series}
                    type="bar"
                    height="240"
                />
            )}
        </div>
    );
};

export default BarChart;
