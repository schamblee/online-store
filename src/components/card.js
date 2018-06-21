import React, { Component } from 'react';

export default class Card extends React.Component {
    render() {
      return (
        <div className="col-4">
          <div className="card">
            <button><img className="card-image" src={this.props.image} alt={this.props.product_name}/></button>
            <div className="card-content">
              <h3>{this.props.product_name}</h3>
              <p>{this.props.product_category}</p>
              <p>${this.props.price}</p>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      );
    }
  }