/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Outline extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Outline</h1>
        <div>{this.props.outline.map((header) => (
          <p>{header}</p>
        ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  outline: state.outline.list,
});

export default withRouter(connect(mapStateToProps, null)(Outline));
