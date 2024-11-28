import React from 'react';
import RLBox1 from './RLBox1';
import RRB1 from './RRB1';
import RRB2 from './RRB2';
import RLBox2 from './RLBox2';
const RecentDeals = () => {
  return (
    <div className=" mt-8 grid grid-cols-10">
      <div className=" col-span-7 flex flex-col gap-3">
        <RLBox1 />
        <RLBox2 />
      </div>
      <div className=" col-span-3 p-3 flex gap-3 flex-col">
        <RRB1 />
        <RRB2 />
      </div>
    </div>
  );
};

export default RecentDeals;
