import React from 'react';
import SideBar from './SideBar';

const Page = ({ children }) => {
  return (
    <>
      <main className='main'>
        <div className="main__container">
          <div className="main__title">
            <div className="main__title-line">URAL</div>
            <div className="main__title-line">RADIO ENGINEERING</div>
            <div className="main__title-line">JOURNAL</div>
          </div>
            
          {children}
        </div>
        <SideBar />
      </main>
    </>
  );
};

export default Page;