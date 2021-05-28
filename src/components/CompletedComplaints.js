import React, { Component } from 'react';
import axios from 'axios';

const Resolvedcomplaint = props => (
  <tr>
    <td>{props.resolvedcomplaint.username}</td>
    <td>{props.resolvedcomplaint.user_mobile}</td>
    <td>{props.resolvedcomplaint.complaint_crime_type}</td>
    <td>{props.resolvedcomplaint.complaint_location}</td>
    <td>{props.resolvedcomplaint.complaint_description}</td>    
    <td>{props.resolvedcomplaint.complaint_date.substring(0,10)}</td>
    <td>{props.resolvedcomplaint.complaint_status}</td>
  </tr>
)


export default class Resolved extends Component {
  constructor(props) {
    super(props);

    this.state = {res: []};
  }

  componentDidMount() {

  axios.post('http://localhost:5000/complaints/findResolved/')
  .then(response => {
    if (response.data.length > 0) {
      this.setState({
        res: response.data,
      })
    }
  })
  .catch((error) => {
    console.log(error);
  })
  }

  
/*  updatecomplaint(id) {
    axios.delete('http://localhost:5000/complaints/update/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      pendingcomplaints: this.state.pendingcomplaints.filter(pc => pc._id !== id)
    })
  }
*/

  resList() {
    return this.state.res.map(rclist => {
      return <Resolvedcomplaint resolvedcomplaint={rclist} key={rclist._id}/>;
    })
  }


  render() {
    return (
        <div>
          <br></br>
        <h3>Resolved Complaints:</h3>
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
            </tr>
          </thead>
          <tbody>
            {this.resList()}
          </tbody>
        </table>
      </div>
    )
  }
}