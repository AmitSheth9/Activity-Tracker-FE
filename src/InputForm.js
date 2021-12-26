import React, { Component } from 'react'
//import { postStatesDifferential } from './fetch-utils';
import { postFormData } from './Fetch-utils';
import {actArr} from './activity-array';
import './InputForm.css';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

export default class InputForm extends Component {
   
        state = {
        name: 'meditation',
        duration: 0,
        notes: '',
        date: new Date().toLocaleString(),
        id: 1,
        user: 'amit',
        act_datetime:'',

        //change act_datetime to datep..its working without it but confusing if you forget
    }

    componentDidMount = async () => {
        this.getDate();     
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.getDate();
        const obj = {
            name: this.state.name,
            duration: this.state.duration,
            time: this.state.datep,
            notes: this.state.notes,
            date: this.state.date,
            user: this.state.user, 
            id: this.state.id }
        
        console.log('submit-obj', obj);
        await postFormData(obj);
        alert('Activity Succesfully Sent!');
        this.setState({ notes: ''});
    }
    getDate = () => {
        let currentDate = new Date().toLocaleString();
        this.setState({ date: currentDate});
    }
    handleOption = (e, value) =>{
        this.setState({ name: e.target.value})
        
    }
    onChangeActivity = (e) => {
        this.setState({ id: e.target.value });
        this.setState({ name: actArr[e.target.value - 1].activity});
    }

    handleDate(date){
        this.setState({datetime: date._d});  
     };

     changeDate = (event) => {
        /*console.log(event.toDate()) // Tue Nov 24 2020 00:00:00 GMT+0400 (Gulf Standard Time)
        console.log(event.format("DD-MM-YYYY hh:mm")) //24-11-2020* format("DD-MM-YYYY hh:mm")*/
        this.setState({...this.state, datep: event.toDate()}) 
       // this.setState({datep: event.format("DD-MM-YYYY hh:mm")})
   }
   
    render() {
        console.log('render');
        console.log('inside render', this.state);
        return (
            <div className='title'> ACTIVITY TRACKER!
            <fieldset>
                <legend>Add Activity</legend>
                <form onSubmit={this.handleSubmit}>
                    
                    <label>Enter Activity Name:
                        <select value={this.state.id} onChange={this.onChangeActivity}>
                        {actArr.map((act => {
                            return  <option key={act.activity} value={(Number(actArr.indexOf(act))+1)}>{act.activity} </option>
                            }))}
                           
                        </select>
                    </label>
                    <br/>
                    
                    <label>Duration (minutes):
                        <input type='number' onChange={ e => this.setState({ duration: e.target.value })}/>
                    </label><br/>
                    
                    <label className='act-time-label'>Activity Time:
                        <Datetime 
                            id="datepicker"
                            className='act-datetime'
                            dateFormat="DD-MM-YY hh:mm"
                            value={this.state.datep}
                            onChange={this.changeDate}
   
                       />
                    </label><br/>
                    
                    <label>Notes:
                        <input type='text' onChange={ e => this.setState({ notes: e.target.value })}/>
                    </label>
                    
                    <button>Submit</button>
                </form>
                </fieldset>
            
        
            </div>
        );
    }
}
