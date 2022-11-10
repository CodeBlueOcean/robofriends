import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        // console.log('constructor'); Shows the proccess go to 1. 
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => {this.setState({ robots: users})});
            
        // console.log('componentDidMount'); Shows the proccess go to 2. 
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        // console.log('render'); Show the proccess go to 3. 
        return !robots.length ?
        <h1>Loading</h1> : 
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default App; 


// Lessons Learned, Removed the s from (robots => because when we say we are fillering the robots from robots.filter, we don't iterate all the robots, just only one robot. Shown up top 
        // const filteredRobots = this.state.robots.filter(robots => {
            // return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

// Lessons Learned, Destructuring 
        // const { robots, searchfield } = this.state; 
        // const filteredRobots = robots.filter(robots => {
            // return robots.name.toLowerCase().includes(searchfield.toLowerCase());
            // if (robots.length === 0) {
            //     return <h1>Loading</h1>

// Lessons Learned 
// We can put !robots.length --> false instead of robots.length === 0 because it means the same
// if (robots.length === 0) {
//     return <h1>Loading</h1>