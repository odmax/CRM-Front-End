import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RLBox2 = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        name: 'People',
        data: [1000, 2300, 3000, 1500, 2000, 4000, 2000, 1800, 2500, 3000, 3200, 2500, 1700],
      },
    ],
    options: {
      chart: {
        height: 350,
        toolbar: {
          show: false,
        },
        type: 'area',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 3,
      },
      grid: {
        borderColor: '#eae9e9',
      },
      xaxis: {
        categories: [
          '01 Jan, 2024',
          '02 Jan, 2024',
          '03 Jan, 2024',
          '04 Jan, 2024',
          '05 Jan, 2024',
          '06 Jan, 2024',
          '07 Jan, 2024',
          '08 Jan, 2024',
          '09 Jan, 2024',
          '10 Jan, 2024',
          '11 Jan, 2024',
          '12 Jan, 2024',
          '13 Jan, 2024',
          '14 Jan, 2024',
          '15 Jan, 2024',
          '16 Jan, 2024',
          '17 Jan, 2024',
          '18 Jan, 2024',
          '19 Jan, 2024',
          '20 Jan, 2024',
          '21 Jan, 2024',
          '22 Jan, 2024',
          '23 Jan, 2024',
          '24 Jan, 2024',
          '25 Jan, 2024',
          '26 Jan, 2024',
          '27 Jan, 2024',
          '28 Jan, 2024',
          '29 Jan, 2024',
          '30 Jan, 2024',
        ],
        labels: {
          trim: true,
          style: {
            fontSize: '12px',
            colors: '#000',
          },
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
        tickAmount: 10,
      },
      yaxis: {
        min: 0,
        max: 4800,
        tickAmount: 5,
        labels: {
          style: {
            colors: '#000',
            fontSize: '12px',
          },
        },
        axisBorder: {
          show: true,
        },
      },
      responsive: [
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 300,
            },
          },
        },
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 250,
            },
          },
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 300,
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 250,
            },
          },
        },
      ],
      colors: ['#FFC107'],
    },
  });

  return (
    <div className="rounded-2xl p-4 border border-[#eae9e9] shadow-lg  flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-bold text-black text-xl">
            Import & Expense Report Statistics
          </h3>
          <p className="text-black">Report Comparison</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded-md border border-[#eae9e9] text-black ">
            7D
          </button>
          <button className="px-4 py-2 rounded-md border border-[#eae9e9] text-black  bg-[#fdde9b]">
            1M
          </button>
          <button className="px-4 py-2 rounded-md border border-[#eae9e9] text-black ">
            3M
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="p-4 bg-gray-100 rounded-lg text-center">
          <p className="text-[#78797a] font-medium">Yearly</p>
          <p className="text-2xl text-black font-bold">0.94K</p>
          <p className="text-green-500">↑ 3.45%</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg text-center">
          <p className="text-[#78797a] font-medium">Monthly</p>
          <p className="text-2xl text-black font-bold">0.94K</p>
          <p className="text-green-500">↑ 3.45%</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg text-center">
          <p className="text-[#78797a] font-medium">Weekly</p>
          <p className="text-2xl text-black font-bold">2.69K</p>
          <p className="text-red-500">↓ 1.92%</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg text-center">
          <p className="text-[#78797a] font-medium">Daily</p>
          <p className="text-2xl text-black font-bold">0.94K</p>
          <p className="text-green-500">↑ 3.45%</p>
        </div>
      </div>
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="area"
        height={450}
      />
    </div>
  );
};

export default RLBox2;
