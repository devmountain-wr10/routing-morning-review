import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      characterDetails: [],
    };
  }

  componentDidMount() {
    const { first, last } = this.props.match.params;
    axios.get(`/api/${first}/${last}`).then((res) =>
      this.setState({
        characterDetails: res.data,
      })
    );
  }

  render() {
    console.log(this.props);
    const {
      firstName,
      middleName,
      lastName,
      bestQuote,
      image,
    } = this.state.characterDetails;
    return (
      <div className="profile">
        <img src={image} alt={`${firstName} ${lastName}`} />
        <h2>{`${firstName} ${middleName} ${lastName}`}</h2>
        <h3>{bestQuote}</h3>
        <button onClick={this.props.history.goBack}>Back</button>
      </div>
    );
  }
}

export default Profile;
