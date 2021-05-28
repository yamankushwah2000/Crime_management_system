import React, { Component } from 'react';
import axios from 'axios';

const Crimetype = props => (
  <tr>
    <td>{props.crimetype.Crime_name}</td>
    <td>{props.crimetype.Crime_count}</td>
  </tr>
)


export default class ShowCrimetype extends Component {
  constructor(props) {
    super(props);

    this.state = {crime_type: []};
  }

  componentDidMount() {

  axios.get('http://localhost:5000/crimetypes/')
  .then(response => {
    if (response.data.length > 0) {
      this.setState({
        crime_type: response.data,
      })
    }
  })
  .catch((error) => {
    console.log(error);
  })
  }

  crimetypelist() {
    return this.state.crime_type.map(allcrimetype => {
      return <Crimetype crimetype={allcrimetype} key={allcrimetype._id}/>;
    })
  }


  render() {
    return (
        <div>
        <h3>Frequency Of Crimes:</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Crime Name</th>
              <th>Crime Frequency</th>
            </tr>
          </thead>
          <tbody>
            {this.crimetypelist()}
          </tbody>
        </table>
      </div>
    )
  }
}