import { FormattedMessage } from 'react-intl';
import image from '../assets/photo_5312080878601622670_y.jpg'
import { Helmet } from 'react-helmet';
import lastIssue from '../assets/issues/tom7n3.jpeg';


const ForAuthorspage = () => {
  return (
    <>
      <Helmet>
        <title>Ural Radio Engineering Journal</title>
        <meta name="description" content="Рецензируемый международный научно-технический журнал с открытым доступом, посвященный последним достижениям радиоэлектроники и связи."/>

        <meta property="og:title" content="Ural Radio Engineering Journal"/>
        <meta property="og:description" content="Рецензируемый международный научно-технический журнал с открытым доступом, посвященный последним достижениям радиоэлектроники и связи."/>
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://ural-radio-toms-projects-f62b8a1d.vercel.app/"/>
        <meta property="og:image" content={lastIssue}/>
      </Helmet>
      <div className='image'></div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p><FormattedMessage id='authors-paragraph__title1' /></p></div>
        <div className="paragraph__text">
          <p><FormattedMessage id='authors-paragraph__text1' /></p>
        </div>
        <ol className="paragraph__list-ol">
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item1' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item2' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item3' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item4' /></li>
        </ol>
      </div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p><FormattedMessage id='authors-paragraph__title2' /></p></div>
        <ul className="paragraph__list-ul paragraph__text_list">
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item5' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item6' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item7' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item8' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item9' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item10' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item11' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item12' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item13' /></li>
        </ul>
      </div>

      <div className="forauthors__image">
      <img src={image} alt="" />
      </div>
      

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p><FormattedMessage id='authors-paragraph__title3' /></p></div>
        <div className="paragraph__text">
          <p><FormattedMessage id='authors-paragraph__text2' /></p>
        </div>
        <div className="paragraph__text paragraph__text_list">
          <p><span className='paragraph__number'>2.2.2.</span> <FormattedMessage id='authors-paragraph__text3' /></p>
          <p><span className='paragraph__number'>2.2.8.</span> <FormattedMessage id='authors-paragraph__text4' /></p>
          <p><span className='paragraph__number'>2.2.13.</span> <FormattedMessage id='authors-paragraph__text5' /></p>
          <p><span className='paragraph__number'>2.2.14.</span> <FormattedMessage id='authors-paragraph__text6' /></p>
          <p><span className='paragraph__number'>2.2.15.</span> <FormattedMessage id='authors-paragraph__text7' /></p>
          <p><span className='paragraph__number'>2.2.16.</span> <FormattedMessage id='authors-paragraph__text8' /></p>
        </div>
      </div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p><FormattedMessage id='authors-paragraph__titile4' /></p></div>
        <ol className="paragraph__list-ol">
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text9' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text10' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text11' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text12' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text13' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text14' /></li>
        </ol>
      </div>
    </>
  );
};

export default ForAuthorspage;