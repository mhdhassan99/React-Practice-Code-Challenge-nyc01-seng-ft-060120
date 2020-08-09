import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {


  render () {
    return (
      <Fragment>
        <div className="belt">
          {
            this.props.currentSushi.map(sushi => <Sushi oneSushi={sushi} key={sushi.id} eatenHandler={this.props.eatenHandler} eaten={this.props.eaten.includes(sushi)}/>)
          }
          <MoreButton moreButtonHandler={this.props.moreButtonHandler}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer