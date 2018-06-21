import React, { Component } from 'react';

export default class Card extends React.Component {
    render() {
      return (
        <div class="col-4">
          <div class="card">
            <img class="card-image" src={this.props.image}/>
            <div class="card-content">
              <h3>{this.props.product_name}</h3>
              <p>{this.props.product_name}</p>
            </div>
          </div>
        </div>
      );
    }
  }