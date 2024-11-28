import React from 'react';

const TopFourCards = () => {
  const cards = [
    {
      icon1: '/public/images/icon/icon-dashboardCard-white-three-dots.svg',
      icon2: '/public/images/icon/icon-DC1-total.svg',
      heading1: 'Total Open Projects',
      heading2: 45,
    },
    {
      icon1: '/public/images/icon/icon-dashboardCard-gray-three-dots.svg',
      icon2: '/public/images/icon/icon-DC2-revenue.svg',
      heading1: 'Revenue',
      heading2: 'R42.040',
    },
    {
      icon1: '/public/images/icon/icon-dashboardCard-gray-three-dots.svg',
      icon2: '/public/images/icon/icon-DC3-leads.svg',
      heading1: 'New Leads',
      heading2: 501,
    },
    {
      icon1: '/public/images/icon/icon-dashboardCard-gray-three-dots.svg',
      icon2: '/public/images/icon/icon-DC4-stores.svg',
      heading1: 'Stores',
      heading2: 4,
    },
  ];
  return (
    <div className="grid grid-cols-4">
      {cards.map((item, idx) => (
        <div
          key={idx}
          className={`${
            idx === 0 ? 'bg-[#292929]' : 'bg-white'
          }  col-span-4 sm:col-span-2 md:col-span-1 p-5 flex flex-col gap-3 rounded-2xl`}
        >
          <div className="flex justify-end">
            <img src={item.icon1} />
          </div>
          <div className="flex">
            <img src={item.icon2} />
          </div>
          <h3 className=" text-[#616161] text-xl font-medium">
            {item.heading1}
          </h3>
          <h6
            className={`${
              idx === 0 ? ' text-white' : 'text-black'
            } text-2xl font-bold`}
          >
            {item.heading2}
          </h6>
        </div>
      ))}
    </div>
  );
};

export default TopFourCards;
