import React from 'react';

const RLBox1 = () => {
  return (
    <div className="rounded-2xl p-8 border border-[#eae9e9] shadow-lg  flex flex-col">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-title-md text-black">Recent Deals</h3>
        <h3 className="font-medium text-title-xs text-[#5a6dd1]">View All</h3>
      </div>
      <div className="flex flex-col gap-3 py-5">
        {[1, 2, 3, 4, 5].map((item, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <div className="flex gap-2 md:justify-between w-full md:w-auto items-center">
              <img
                src={'/public/images/user/user-02.png'}
                className="h-12 w-12"
              />
              <div className=" text-black flex flex-col font-bold">
                <span>319 Haul Road </span>
                <span className=" font-medium text-[#706a6a] text-sm">
                  Glenrock, WY
                </span>
              </div>
            </div>
            <div className=" text-black  items-end flex flex-col font-bold">
              <span>$5112 </span>
              <span className=" font-medium text-[#706a6a] text-sm">
                Nov 14, 07:00 AM
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RLBox1;
