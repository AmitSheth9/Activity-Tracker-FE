import React, { Component } from 'react'
//import { postStatesDifferential } from './fetch-utils';
import { postFormData } from './Fetch-utils';


export default class PopulationChange extends Component {
    
    state = {
        name: '',
        duration: '',
        time: '',
        notes: '',
        date: '',
        user: 'amit'
    }
    
    componentDidMount = async () => {
        this.setState ({ date: this.getDate()});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.getDate();
        let obj = {
            name: this.state.name,
            duration: this.state.duration,
            time: this.state.time,
            notes: this.state.notes,
            date: this.state.date,
            user: this.state.user }
            console.log('submit');
        console.log(obj);
        postFormData(obj);
    }
    getDate = () => {
        let currentDate = new Date().toLocaleString();
        console.log('date' + currentDate);
        this.setState({ date: currentDate});
    }
    render() {
        console.log('render');
        console.log(this.state);
        return (
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <label>Enter Activity Name:
                    <input type='text' onChange={ e => this.setState({ name: e.target.value })} />
                    </label>
                    <br/>
                    <label>Activity Duration:
                        <input type='text' onChange={ e => this.setState({ duration: e.target.value })}/>
                    </label><br/>
                    <label>Activity Time:
                        <input type='text' onChange={ e => this.setState({ time: e.target.value })}/>
                    </label><br/>
                    <label>Notes:
                        <input type='text' onChange={ e => this.setState({ notes: e.target.value })}/>
                    </label>
                    <button>Submit</button>
                </form>
            
        
            </div>
        );
    }
}
