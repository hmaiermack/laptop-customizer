import React from 'react'
import slugify from 'slugify';
import './App.css'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });


class Total extends React.Component{
    render(){
        return(
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.props.currency.format(this.props.total)}
              </div>
            </div>
        )
    }
}

export default Total