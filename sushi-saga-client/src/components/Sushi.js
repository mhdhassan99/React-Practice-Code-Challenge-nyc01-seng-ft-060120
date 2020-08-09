import React, { Fragment } from 'react'

class Sushi extends React.Component {
  clickHandler = (e) => {
    this.props.eatenHandler(this.props.oneSushi)
    // console.log(this.props.oneSushi)
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={this.clickHandler}>
          {this.props.eaten ? null: <img src={this.props.oneSushi.img_url} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {this.props.oneSushi.name} - ${this.props.oneSushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi