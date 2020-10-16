import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <a className="button delete is-large" onClick={() => {props.removeFeature(props.feature)}}></a>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
