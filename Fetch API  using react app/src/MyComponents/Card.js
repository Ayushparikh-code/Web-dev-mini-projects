import React from 'react';

const Card = ({ name, email, id, lname}) => {

    return (
      <div className='tc grow bg-light-green br3 pa4 ma4 dib bw3 shadow-10'>
        <img alt='robots' src={`https://reqres.in/img/faces/${id}-image.jpg`} />
        <div>
		  <br />
          <h2>{name} {lname}</h2>
		  <br />
          <h3>{email}</h3>
        </div>
      </div>
    );
  }

export default Card;