import randomcolor from "randomcolor"
import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  componentDidMount() {
    console.log("Mounted")
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      const newColor = randomcolor() 
      this.setState({color: newColor})
    }
  }

  render() {
    console.log("Render")
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>
          Increment!
        </button>
      </div>
    )
  }
}

export default App