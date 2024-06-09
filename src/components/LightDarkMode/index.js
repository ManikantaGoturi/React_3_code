import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {IschangeLight: true}

  onChangeBackground = () => {
    const {IschangeLight} = this.state

    if (IschangeLight === true) {
      this.setState({IschangeLight: false})
    } else {
      this.setState({IschangeLight: true})
    }
  }

  render() {
    const {IschangeLight} = this.state

    return (
      <div className="background_container">
        {IschangeLight ? (
          <div className="CardContainerDark">
            <h1 className="headingDark">Click to Change Mode</h1>
            <button className="DarkModeBtn" onClick={this.onChangeBackground}>
              Dark Mode
            </button>
          </div>
        ) : (
          <div className="CardContainerWhite">
            <h1 className="headingWhite">Click to Change Mode</h1>
            <button className="LightModeBtn" onClick={this.onChangeBackground}>
              Light Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
