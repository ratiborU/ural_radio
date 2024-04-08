// import React from 'react';
import { Helmet } from 'react-helmet';
import lastIssue from '../assets/issues/tom7n3.jpeg';

const HelmetComponent = () => {
  return (
    <div>
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
    </div>
  );
};

export default HelmetComponent;