import React, {Component} from "react";  //import this way when creating a class
//import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from './SearchBox';  // search box component
import './App.css';

//PLANNIN STEP 3
// STATE is description of the app.
// **REMEMBER: STATE is the parent and props is from parent
// **RULE: When reture in component, only ONE element. Wrapping everythng in <div></div> make it one element.
class App extends Component {
    // Use constructor to call state
    constructor() {
        super() // **RULE: use super() to communicate between, this.state and constructor 
        this.state = {   // use STATE to communicate CardList with SearchBox. 
            robots:robots,
            searchfield:''
        }
    }

    // this function said everytime an event happens, console.log the event.
    onSearchChange = (event) =>{ 
        this.setState({searchfield: event.target.value});    // use this.setStart() to change the state of searchfield
        //console.log(event.target.value); //**SYNTEX to remember: event.target.value This will give the value of the search
    }

    render() {  // **class always have a render() to return something.
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/> {/* create a property using onSearchChange function*/}
                <CardList robots={filteredRobots}/>  {/*moved const filterdRobots inside Render(), 
                                                        now we can use filterRobots instead of this.state.robot*/}
            </div>
        );
    }
}


//PLANNIN STEP 2
// STATE is description of the app.
// **REMEMBER: STATE is the parent and props is from parent
// **RULE: When reture in component, only ONE element. Wrapping everythng in <div></div> make it one element.
/*class App extends Component {
    // Use constructor to call state
    constructor() {
        super() // **RULE: use super() to communicate between, this.state and constructor 
        this.state = {   // use STATE to communicate CardList with SearchBox. 
            robots:robots,
            searchfield:''
        }
    }

    // this function said everytime an event happens, console.log the event.
    onSearchChange = (event) =>{ 
        this.setState({searchfield: event.target.value});    // use this.setStart() to change the state of searchfield
        //console.log(event.target.value); //**SYNTEX to remember: event.target.value This will give the value of the search
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        //console.log(filteredRobots);
    }

    render() {  // **class always have a render() to return something.
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/> {/* create a property using onSearchChange function*//*}
/*                <CardList robots={this.state.robots}/>  {/*get robots from state instead of Card.js*//*}
/*            </div>
        );
    }
}
*/

//PLANNIN STEP 1
// When reture in component, only ONE element. Wrapping everythng in <div></div> make it one element.
/*const App = () => {
    return (
        <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox/>
            <CardList robots={robots}/>
        </div>
    )
}
*/

export default App;