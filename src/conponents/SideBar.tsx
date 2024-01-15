import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import IssuesService from '../api/IssuesService';
import { FormattedMessage } from 'react-intl'
import image from "../assets/issues/tom7n3.jpeg";


const SideBar = () => {
  const [lastIssue, stLastIssue] = useState({});
  const [lastIssueImage, stLastIssueImage] = useState();


  const [fetchIssue, isIssueLoading, issueError] = useFetching( async () => {
    const issuesResponse = await IssuesService.getAllIssues();
    issuesResponse.sort((a, b) => a["title"]["Ru"] < b["title"]["Ru"] ? 1 : -1);
    // console.log(issuesResponse[0]);
    stLastIssue(issuesResponse[0]);
  })


  const [fetchIssueImage, isIssueImageLoading, issueImageError] = useFetching( async () => {
    const issuesResponse = await IssuesService.getImageLinkById(lastIssue["coverPathId"]);
    // console.log(issuesResponse);
    stLastIssueImage(issuesResponse);
  })


  useEffect(() => {
    fetchIssue();
  }, []);


  useEffect(() => {
    fetchIssueImage();
  }, [lastIssue]);


  return (
    <div className="sidebar">
      <div className="sidebar__image">
        {isIssueLoading 
          ? <p>загрузка</p> 
          : <Link to={`/catalog/${lastIssue["id"]}`}>
              <img src={lastIssueImage ? image : lastIssueImage} alt="#" />
            </Link>
        }
      </div>
      <a href="https://www.akc.ru/itm/ural-radio-engineering-journal/" target='blank'>
        <button className="sidebar__button">
          <FormattedMessage id='sidebar__button' />
        </button>
      </a>
      
      <p className="sidebar__text">ISSN онлайн-версии:2588-0462</p>
      <p className="sidebar__text">ISSN печатной версии:2588-0454</p>
    </div>
  );
};

export default SideBar;