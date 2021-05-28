import React, { Component } from 'react';
import axios from 'axios';

const Criminal = props => (
  <tr>
    <td>{props.criminal.criminal_name}</td>
    <td>{props.criminal.criminal_address}</td>
    <td>{props.criminal.criminal_crime_count}</td>
    <td>{props.criminal.criminal_gender}</td>
    <td>{props.criminal.criminal_DoB.substring(0,10)}</td>
  </tr>
)


export default class Showcriminals extends Component {
  constructor(props) {
    super(props);

    this.state = {criminals: []};
  }

  componentDidMount() {

  axios.get('http://localhost:5000/criminals/')
  .then(response => {
    if (response.data.length > 0) {
      this.setState({
        criminals: response.data,
      })
    }
  })
  .catch((error) => {
    console.log(error);
  })
  }

  criminalList() {
    return this.state.criminals.map(allcriminal => {
      return <Criminal criminal={allcriminal} key={allcriminal._id}/>;
    })
  }


  render() {
    return (
        <div>
          <br></br>
        <h3>Criminal Record:</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Criminal Name</th>
              <th>Address</th>
              <th>Crime Count</th>
              <th>Gender</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {this.criminalList()}
          </tbody>
        </table>
      </div>
    )
  }
}