import React from 'react';

const Header = props => {
  return (
    <>
      <figure className="image is-4by2">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2 className="is-size-5 has-text-centered is-uppercase has-text-weight-medium mt-6">{props.car.name}</h2>
      <p>Amount: <span className="has-text-weight-semibold">${props.car.price}</span></p>
    </>
  );
};

export default Header;
