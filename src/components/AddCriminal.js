import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class AddCriminal extends Component {
  constructor(props) {
    super(props);

    this.onChangeCriminalname = this.onChangeCriminalname.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeDoB = this.onChangeDoB.bind(this);
    this.onChangeCrimeCount = this.onChangeCrimeCount.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      
      criminal_name: '',
      criminal_address: '',
      criminal_crime_count: 0,
      criminal_DoB: new Date(),
      criminal_gender:'',
      Gender: []
    }
  }

  componentDidMount() {
      this.setState({
          Gender: ['Male','Female','Prefer not say'],
      })
  }
  onChangeCriminalname(e) {
    this.setState({
      criminal_name: e.target.value
    })
  }
  onChangeDoB(date) {
    this.setState({
      criminal_DoB: date
    })
  }

  onChangeAddress(e) {
    this.setState({
      criminal_address: e.target.value
    })
  }

  
  onChangeCrimeCount(e) {
    this.setState({
      criminal_crime_count: e.target.value
    })
  }

  onChangeGender(e) {
    this.setState({
      criminal_gender: e.target.value
    })
  }
  

  onSubmit(e) {
    e.preventDefault();

    const Criminal = {
      criminal_name: this.state.criminal_name,
      criminal_address: this.state.criminal_address,
      criminal_DoB: this.state.criminal_DoB,
      criminal_crime_count: this.state.criminal_crime_count,
      criminal_gender: this.state.criminal_gender,
    
    }

    console.log(Criminal);
    axios.post('http://localhost:5000/criminals/add', Criminal)
      .then(res => console.log(res.data));
    this.setState({
     
      criminal_name: '',
      criminal_address: '',
      criminal_DoB: new Date(),
      criminal_crime_count: 0,
      criminal_gender:'',
      
    })
  }

  render() {
    return (
    <div >
      <br></br>
      <h3>Enter Criminal Details:</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Criminal Name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.criminal_name}
              onChange={this.onChangeCriminalname}
              />
        </div>
        <div className="form-group"> 
          <label>Address: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.criminal_address}
              onChange={this.onChangeAddress}
              />
        </div>
        
        <div className="form-group"> 
          <label>Crime Count: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.criminal_crime_count}
              onChange={this.onChangeCrimeCount}
              />
        </div>
        <div className="form-group">
          <label>Date of Birth: </label>
          <div>
            <DatePicker
              selected={this.state.criminal_DoB}
              onChange={this.onChangeDoB}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Gender: </label>
          <select ref="CriminalInput"
              required
              className="form-control"
              value={this.state.criminal_gender}
              onChange={this.onChangeGender}>
              {
                this.state.Gender.map(function(Criminal) {
                  return <option 
                    key={Criminal}
                    value={Criminal}>{Criminal}
                    </option>;
                })
              }
          </select>
        </div>
        
        <div className="form-group">
          <input type="submit" value="Add Criminal Record" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}