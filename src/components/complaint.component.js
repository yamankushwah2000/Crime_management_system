import axios from 'axios';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class complaint extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);

    this.oncomplaint_crime_type = this.oncomplaint_crime_type.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.onChangecomplaint_location = this.onChangecomplaint_location.bind(this);
    this.onChangecomplaint_description = this.onChangecomplaint_description.bind(this);
    this.onChangecomplaint_status = this.onChangecomplaint_status.bind(this);
    this.onChangecomplaint_date=this.onChangecomplaint_date.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      
      username: '',
      complaint_crime_type: '',
      user_mobile: 0,
      complaint_location:'',
      complaint_description:'',
      complaint_status:'Pending',
      complaint_date: new Date(),
      location: [],
      crimetype:[]
    }
  }

  componentDidMount() {
      this.setState({
          location: ['Central Nagpur','South Nagpur','West Nagpur','East Nagpur','North Nagpur','Nagpur rural'],
          crimetype:['Car theft','Assault','Buglary','Cybercrime','Kidnapping','Smuggling','Murder'],
      })
  }

  
  onChangeUsername(e) {
    this.setState({
        username: e.target.value
    })
  }

  oncomplaint_crime_type(e) {
    this.setState({
        complaint_crime_type: e.target.value
    })
  }

  onChangecomplaint_location(e) {
    this.setState({
         complaint_location: e.target.value
    })
  }

  onChangecomplaint_description(e) {
    this.setState({
        complaint_description: e.target.value
    })
  }

  onChangeMobile(e) {
    this.setState({
      user_mobile: e.target.value
    })
  }

  onChangecomplaint_status(e) {
    this.setState({
        complaint_status: e.target.value
    })
  }
  onChangecomplaint_date(date) {
    this.setState({
        complaint_date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const complaint = {
      username: this.state.username,
      user_mobile: this.state.user_mobile,
      complaint_crime_type: this.state.complaint_crime_type,
      complaint_location: this.state.complaint_location,
      complaint_description : this.state.complaint_description ,
      complaint_status : this.state.complaint_status ,
      complaint_date: this.state.complaint_date
    }

    console.log(complaint);
    axios.post('http://localhost:5000/complaints/add', complaint)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      user_mobile: 0,
      complaint_crime_type: '',
      complaint_location: '',
      complaint_description:'',
      complaint_status: 'Pending',
      complaint_date: new Date(),
    })
  }

 
  render() {
    return (
    <div>
      <h3>Register New Complaint</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
        </div>

        <div className="form-group"> 
          <label>Mobile: </label>
          <input  type="Text"
              required
              className="form-control"
              value={this.state.user_mobile}
              onChange={this.onChangeMobile}
              />
        </div>

        <div className="form-group">
          <label>Crime type: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.complaint_crime_type}
              onChange={this.oncomplaint_crime_type}>
              {
                this.state.crimetype.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Crime location </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.complaint_location}
              onChange={this.onChangecomplaint_location}>
              {
                this.state.location.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group"> 
          <label>Complaint description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.complaint_description}
              onChange={this.onChangecomplaint_description}
              />
        </div>

        
        <div className="form-group">
          <label>Date of crime: </label>
          <div>
            <DatePicker
              selected={this.state.complaint_date}
              onChange={this.onChangecomplaint_date}
            />
          </div>
        </div>

        
        <div className="form-group">
          <input type="submit" value="Register Complaint" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}