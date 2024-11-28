import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import TopFourCards from "./components/TopFourCards"
import OverviewSection from "./components/OverviewSection"
import RecentDeals from "./components/RecentDeals"

const Dashboard: React.FC = () => {
  return (
    <DefaultLayout>
     <TopFourCards/>
      <OverviewSection/>
      <RecentDeals/>
    </DefaultLayout>
  );
};

export default Dashboard;
