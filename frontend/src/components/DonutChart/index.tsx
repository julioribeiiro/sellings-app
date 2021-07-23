import { useEffect } from 'react';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import salesServices from 'services/salesServices';
import { SaleSum } from 'types/sale';

type ChartData = {
    series: number[];
    labels: string[];
};

const DonutChart = () => {
    const [chartData, setChartData] = useState<ChartData>({
        labels: [],
        series: [],
    });

    const [chartLoading, setChartLoading] = useState(true);

    useEffect(() => {
        salesServices
            .getAmountBySellers()
            .then(response => {
                const data = response.data as SaleSum[];
                const treatedData = {
                    series: [],
                    labels: [],
                } as ChartData;
                data.map(elem => {
                    treatedData.labels.push(elem.sellerName);
                    treatedData.series.push(elem.sum);
                });
                setChartData(treatedData);
                setChartLoading(false);
            })
            .catch(error => console.log('Something went wrong', error));
    }, []);

    const options = {
        legend: {
            show: true,
        },
    };

    return (
        <div>
            {chartLoading ? (
                <h5 className="text-center mt-5">Loading...</h5>
            ) : (
                <Chart
                    options={{ ...options, labels: chartData.labels }}
                    series={chartData.series}
                    type="donut"
                    height="240"
                />
            )}
        </div>
    );
};

export default DonutChart;
