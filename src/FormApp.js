import React, { Component } from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="Laverne" 
                    onChange={this.handleChange}></input>
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Shirley" 
                    onChange={this.handleChange}></input>
                <br />
                <textarea
                    value={"Hello, Laverne."}    
                    onChange={this.handleChange}
                />
                <br/>
                <label>
                    <input 
                        type="checkbox" 
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>
                <br/>      
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>

                <br/>
                <label>Favorite Color: </label>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor">
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                </select>

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h1>I am a {this.state.gender}.</h1>
                <h1>Your favorite color is {this.state.favColor}.</h1>
                <button>Submit</button>
            </form>
        )
    }
}

export default App