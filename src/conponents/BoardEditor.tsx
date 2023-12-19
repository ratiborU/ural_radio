import React from 'react';
import { Link } from 'react-router-dom';
import reductors from '../api/ReductorsApi';

const BoardEditor = ({id}) => {
  return (
    <div>
      <div className="editors__board-element">
        <div className="editors__board-image">
          <Link  to={`/editors/${id}`}>
            <img src={reductors[id].image} alt="" />
          </Link>
        </div>
        <p className='editors__board-name'>{reductors[id].name}</p>
      </div>
    </div>
  );
};

export default BoardEditor;