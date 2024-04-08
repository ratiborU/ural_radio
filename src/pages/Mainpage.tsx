// import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl'
// import { Helmet } from 'react-helmet';
// import lastIssue from '../assets/issues/tom7n3.jpeg';
import HelmetComponent from '../components/HelmetComponent';


const Mainpage = () => {
  console.log(window.location.href);
  return (
    <>
      <HelmetComponent/>
      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p><FormattedMessage id='mainpage-paragraph__title1' /></p></div>
        <div className="paragraph__text">
          <p><FormattedMessage id='mainpage-paragraph__text1' /></p>
          <p><FormattedMessage id='mainpage-paragraph__text2' /></p>
          <p><FormattedMessage id='mainpage-paragraph__text1-1' /></p>
        </div>
      </div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p><FormattedMessage id='mainpage-paragraph__title2' /></p></div>
        <div className="paragraph__text">
          <p><span className='paragraph__number'>2.2.2.</span> <FormattedMessage id='mainpage-paragraph__text3' /></p>
          <p><span className='paragraph__number'>2.2.8.</span> <FormattedMessage id='mainpage-paragraph__text4' /></p>
          <p><span className='paragraph__number'>2.2.13.</span> <FormattedMessage id='mainpage-paragraph__text5' /></p>
          <p><span className='paragraph__number'>2.2.14.</span> <FormattedMessage id='mainpage-paragraph__text6' /></p>
          <p><span className='paragraph__number'>2.2.15.</span> <FormattedMessage id='mainpage-paragraph__text7' /></p>
          <p><span className='paragraph__number'>2.2.16.</span> <FormattedMessage id='mainpage-paragraph__text8' /></p>
        </div>
        <div className="paragraph__text">
          <p><FormattedMessage id='mainpage-paragraph__text9' /></p>
          <p><FormattedMessage id='mainpage-paragraph__text10' /></p>
          <p><FormattedMessage id='mainpage-paragraph__text11' /></p>
        </div>
      </div>
    </>
  );
};


export default Mainpage;