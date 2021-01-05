import React, { Component } from 'react'

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
       topText: "",
       bottomText: "",
       randomImg: "https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg",
       allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        console.log(memes[0])
        this.setState({ allMemeImgs: memes })
      })
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({ randomImg: randMemeImg })
}

  render() {
    return(
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"  
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            name="bottomText"  
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          ></input>
          <button>Generate</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt=""></img>
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator