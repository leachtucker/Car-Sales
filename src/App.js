import React from 'react';

import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="box">
          <Header car={this.props.car} />
          <AddedFeatures car={this.props.car} removeFeature={this.props.removeFeature} />
        </div>
        <div className="box">
          <AdditionalFeatures additionalFeatures={this.props.additionalFeatures} addFeature={this.props.addFeature} />
          <Total car={this.props.car} additionalPrice={this.props.additionalPrice} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  };
}

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
