import React from 'react';
import { UserCard } from './components/user-card';
import { SummaryCard } from './components/summary-card';
import './account-overview.css';
import { PercentageCard } from './components/percentage-card';

export const AccountOverview = ({ data }) => {
  return (
    <div className="AccountOverview">
      <main>
        <div className='top'>
          <div className='left'>
            <p>Account Overview</p>
          </div>
          <div className='right'>
            <UserCard supportContact={data.supportContact} />
          </div>
        </div>
        <div className='summary-card-container'>
          <SummaryCard uploads={data.salesOverview.uploads} lines={data.salesOverview.linesAttempted} />
        </div>
        <div className='percentage-card-container'>
          <PercentageCard totalData={data.salesOverview.uploads} consolidatedData={data.salesOverview.successfulUploads} text={'Upload Success'} />
          <PercentageCard totalData={data.salesOverview.linesAttempted} consolidatedData={data.salesOverview.linesSaved} text={'Lines Saved'} />
        </div>
      </main>
    </div>
  )
}

export default AccountOverview;