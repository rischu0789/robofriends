import React, {Component} from "react";  //import this way when creating a class
//import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from './SearchBox';  // search box component
import Scroll from './Scroll';  // component to scroll though the robots on the site using Children
import ErrorBoundry from "./ErrorBoundry";  // to catch errors
import './App.css';
 


//PLANNING STEP 4
// lifecycle runs in order. See documentation below for order
//lifecycle hooks https://reactjs.org/docs/react-component.html

class App extends Component {
    // Use constructor to call state
    constructor() {
        super() // **RULE: use super() to communicate between, this.state and constructor 
        this.state = {   // use STATE to communicate CardList with SearchBox. 
            robots:[],  // In real world usually this list is not written out. Most likely you have to get it from somewhere
            searchfield:''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') //fetch data from the URL
        .then(response=>  response.json())      // arrow function. doesnt need {} when return 1 thing only
        .then(users => this.setState({ robots: users })); //update robots state to users
    
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
        if(this.state.robots.length === 0) { //check if robots are taking a long time to load, the "Loading" will display on the screen.
            return <h1>Loading</h1>
        } else {
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/> {/* create a property using onSearchChange function*/}
                <Scroll>
                <ErrorBoundry> {/*If CardList get error, ErrorBoundry will try to catch it */}
                    <CardList robots={filteredRobots}/> 
                </ErrorBoundry>
                </Scroll>                                 
            </div>
        );
        }
    }
}


export default App;