import React from 'react';

const RRB1 = () => {
  const stores = [
    {
      title: 'Store 1',
      color: '#ffba39',
      progress: '60%',
    },
    {
      title: 'Store 2',
      color: '#9e9e9e',
      progress: '40%',
    },
    {
      title: 'Store 3',
      color: '#292929',
      progress: '30%',
    },
  ];
  return (
    <div className="flex gap-3 flex-col bg-[#f5f7f9] rounded-2xl p-5">
      <h3 className="font-bold text-title-sm text-black">Comparsion (Month)</h3>
      <div className="flex flex-col gap-3">
        {stores?.map((item, idx) => (
          <div key={idx} className="flex justify-start items-center gap-6">
            <h3 className="font-medium text-title-xs text-[#78797a]">
              {item.title}
            </h3>
            <div
              className="h-10 rounded-xl"
              style={{
                backgroundColor: item.color,
                width: item.progress,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RRB1;
