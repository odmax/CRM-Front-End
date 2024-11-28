import React from 'react';
import ReactApexChart from 'react-apexcharts';
const OverviewSection = () => {
  return (
    <div className=" mt-8 grid grid-cols-10">
      <div className=" col-span-7">
        <SalesOverview />
      </div>
      <div className=" col-span-3 p-5 flex flex-col">
        <h3 className="font-bold text-title-lg text-black">Store Overview</h3>
        <div className=" relative">
          <div className=" absolute w-56 top-10 left-5 h-56 flex justify-center items-center flex-col text-center pb-14 bg-[#ffba39] rounded-full">
            <h3 className="text-title-md text-black font-bold">R100.055</h3>
            <h6 className=" text-title-sm text-[#79581a] font-medium">
              Store 1
            </h6>
          </div>
          <div className=" absolute w-36 top-40 left-3 border-2 border-white flex justify-center items-center flex-col text-center h-36 bg-[#9e9e9e] rounded-full">
            <h3 className="text-title-sm text-black font-bold">R60.055</h3>
            <h6 className=" text-title-xs text-[#464646] font-medium">
              Store 2
            </h6>
          </div>
          <div className=" absolute border-2 border-white flex justify-center items-center flex-col text-center w-28 top-56 left-28 h-28 bg-[#292929] rounded-full">
            <h3 className="text-title-sm text-white font-bold">R31.055</h3>
            <h6 className=" text-title-xs text-[#9e9e9e] font-medium">
              Store 3
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

const SalesOverview = () => {
  const options = {
    series: [{ data: [0, 0, 0, 0, 0, 766, 0, 0, 0, 0, 0, 0] }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        labels: {
          style: {
            colors: '#000',
            fontSize: '12px',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      dataLabels: {
        enabled: false, // Disable data labels
      },
      colors: ['#f1a706'], // Set color for the bars (yellow)
      legend: {
        show: false, // Hide legend
      },
      fill: {
        opacity: 1,
      },
      grid: {
        borderColor: 'gray', // Set grid color to gray
        strokeDashArray: 5, // Set dashed lines
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      stroke: {
        show: false, // Remove stroke lines
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            if (val !== 0) {
              return `from ${val} $`;
            }
            return '';
          },
          title: {
            formatter: () => '',
          },
          style: {
            backgroundColor: '#FFC107', // Yellow background for the tooltip
          },
        },
      },
    },
  };

  return (
    <div className="p-5">
      <div className="flex w-full justify-between items-center text-black">
        <h3 className="font-medium text-title-md">Overview of Sales Revenue</h3>
      </div>
      <ReactApexChart
        options={options.options}
        series={options.series}
        type="bar"
        height={450}
      />
    </div>
  );
};

export default OverviewSection;
