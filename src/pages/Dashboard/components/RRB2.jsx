import React from 'react';

const RRB2 = () => {
  return (
    <div className="rounded-2xl h-full p-3 border border-[#eae9e9] shadow-lg flex flex-col">
      <div className="flex justify-between gap-2 items-center">
        <h3 className="font-bold text-lg text-black">Support Requests</h3>
        <h3 className="font-medium text-xs text-[#5a6dd1]">View All</h3>
      </div>
      <div className="flex flex-col gap-3 py-5">
        {[1, 2, 3, 4, 5,6,7].map((item, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <div className="flex gap-2 md:justify-between w-full md:w-auto items-center">
              <img
                src={'/public/images/user/user-05.png'}
                className="h-12 w-12"
              />
              <div className=" text-black flex flex-col font-bold">
                <span>Vincent Lopez </span>
                <span className=" font-medium text-[#9c9b9b] text-sm">
                  Thanks for contact us with your issues...
                </span>
                <span className=" font-medium mt-4 text-[#706a6a] text-sm">
                  6 min ago
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RRB2;
