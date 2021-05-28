import React, { Component } from 'react';
import axios from 'axios';

const Pendingcomplaint = props => (
  <tr>
    <td>{props.pendingcomplaint.username}</td>
    <td>{props.pendingcomplaint.user_mobile}</td>
    <td>{props.pendingcomplaint.complaint_crime_type}</td>
    <td>{props.pendingcomplaint.complaint_location}</td>
    <td>{props.pendingcomplaint.complaint_description}</td>
    <td>{props.pendingcomplaint.complaint_status}</td>
    <td>{props.pendingcomplaint.complaint_date.substring(0,10)}</td>
    <td>
    <button className="btn btn-primary mx-1" onClick={() => { props.updatecomplaint(props.pendingcomplaint._id)}}>Update Status</button>
    </td>
  </tr>
)


export default class Showcriminals extends Component {
  constructor(props) {
    super(props);
    this.updatecomplaint = this.updatecomplaint.bind(this)
    this.state = {pendingcomplaints: []};
  }

  componentDidMount() {

  axios.post('http://localhost:5000/complaints/findPending')
  .then(response => {
    if (response.data.length > 0) {
      this.setState({
        pendingcomplaints: response.data,
      })
    }
  })
  .catch((error) => {
    console.log(error);
  })
  }

  
  updatecomplaint(id) {
    axios.post('http://localhost:5000/complaints/update/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      pendingcomplaints: this.state.pendingcomplaints.filter(pc => pc._id !== id)
    })
  }


  pendingcomplaintList() {
    return this.state.pendingcomplaints.map(allpendingcomplaintlist => {
      return <Pendingcomplaint pendingcomplaint={allpendingcomplaintlist} updatecomplaint={this.updatecomplaint} key={allpendingcomplaintlist._id}/>;
    })
  }


  render() {
    return (
        <div>
          <br></br>
        <h3>Pending Complaints:</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Complainant Name</th>
              <th>Mobile No.</th>
              <th>Crime Type</th>
              <th>Crime Location</th>
              <th>Crime Descript</th>
              <th>Date of Crime</th>
              <th>Crime Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {this.pendingcomplaintList()}
          </tbody>
        </table>
      </div>
    )
  }
}
