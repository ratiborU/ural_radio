// import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl'
import { Helmet } from 'react-helmet';
import lastIssue from '../assets/issues/tom7n3.jpeg';


const Mainpage = () => {
  console.log(window.location.href);
  return (
    <>
      <Helmet>
        <title>Ural Radio Engineering Journal</title>
        <meta name="description" content="Рецензируемый международный научно-технический журнал с открытым доступом, посвященный последним достижениям радиоэлектроники и связи."/>

        <meta property="og:title" content="Ural Radio Engineering Journal"/>
        <meta property="og:description" content="Рецензируемый международный научно-технический журнал с открытым доступом, посвященный последним достижениям радиоэлектроники и связи."/>
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={window.location.href}/>
        <meta property="og:image" content={lastIssue}/>
        <meta property="og:image:secure_url" content={lastIssue} />
      </Helmet>
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