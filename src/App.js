import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';
import MainForm from './MainForm.js'
import Summary from './Summary'
import Total from './Total'
import Header from './Header'

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    },
    total: null,
  };


  //updates selected form element
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    //returns whole app
    return (
      <div className="App">
        <Header />
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <MainForm 
              features={this.props.features}
              selected={this.state.selected}
              updateFeature={this.updateFeature}
              currency={USCurrencyFormat}>
            </MainForm>
          </form>
          <section className="main__summary">
            <h2>Your Cart</h2>
            <Summary 
            selected={this.state.selected}
            currency={USCurrencyFormat}>
            </Summary>
            <Total
            currency={USCurrencyFormat}
            updateFeature={this.updateFeature}
            total={Object.keys(this.state.selected).reduce(
              (acc, curr) => acc + this.state.selected[curr].cost,
              0)}>
            </Total>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
