import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeDoB = this.onChangeDoB.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      
      username: '',
      user_email: '',
      user_password: '',
      user_mobile: 0,
      user_Gender:'',
      user_DoB: new Date(),
      gender: []
    }
  }

  componentDidMount() {
      this.setState({
          gender: ['Male','Female','Prefer not say'],
          user_Gender: 'Male'
      })
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      user_email: e.target.value
    })
  }

  onChangePass(e) {
    this.setState({
      user_password: e.target.value
    })
  }

  onChangeMobile(e) {
    this.setState({
      user_mobile: e.target.value
    })
  }

  onChangeGender(e) {
    this.setState({
      user_Gender: e.target.value
    })
  }
  onChangeDoB(date) {
    this.setState({
      user_DoB: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      user_email: this.state.user_email,
      user_password: this.state.user_password,
      user_mobile: this.state.user_mobile,
      user_Gender: this.state.user_Gender,
      user_DoB: this.state.user_DoB
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));
      
    this.setState({
      username: '',
      user_email: '',
      user_password: '',
      user_mobile: 0,
      user_Gender:'',
      user_DoB: new Date(),
    })
    window.location='/';
  }

  render() {
    return (
    <div>
      <br></br>
      <h3>Create New User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
        </div>
        <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.user_email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group"> 
          <label>Password: </label>
          <input  type="password"
              required
              className="form-control"
              value={this.state.user_password}
              onChange={this.onChangePass}
              />
        </div>
        <div className="form-group"> 
          <label>Mobile: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.user_mobile}
              onChange={this.onChangeMobile}
              />
        </div>
        <div className="form-group">
          <label>Gender: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.user_Gender}
              onChange={this.onChangeGender}>
              {
                this.state.gender.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <label>Date of Birth: </label>
          <div>
            <DatePicker
              selected={this.state.user_DoB}
              onChange={this.onChangeDoB}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create User" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}