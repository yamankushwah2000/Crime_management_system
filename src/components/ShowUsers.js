import React, { Component } from 'react';
import axios from 'axios';

const User = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.user_email}</td>
    <td>{props.user.user_mobile}</td>
    <td>{props.user.user_Gender}</td>
    <td>{props.user.user_DoB.substring(0,10)}</td>     
  </tr>
)


export default class ShowUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {users: []};
  }

  componentDidMount() {
    
  axios.get('http://localhost:5000/users/')
  .then(response => {
    if (response.data.length > 0) {
      this.setState({
        users: response.data,
      })
    }
  })
  .catch((error) => {
    console.log(error);
  })
  }

  userList() {
    return this.state.users.map(alluser => {
      return <User user={alluser} key={alluser._id}/>;
    })
  }


  render() {
    return (
        <div>
        <br></br>
        <h2>List of Users:</h2>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Mobile No.</th>
              <th>Gender</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {this.userList()}
          </tbody>
        </table>
      </div>
    )
  }
}