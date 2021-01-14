import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEdad = this.onChangeEdad.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      edad:'',
      mail: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangeEdad(e) {
    this.setState({
      edad: e.target.value
    })
  }
  onChangeMail(e) {
    this.setState({
      mail: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      edad: this.state.edad,
      mail: this.state.mail
    }

    console.log(user);

    axios.post('http://'+window.location.hostname+':'+window.location.port+'/create', user) 
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      edad: '',
      mail:''
    })

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
            />

            <label>mail: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.mail}
                onChange={this.onChangeMail}
                />
            <label>edad: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.edad}
                onChange={this.onChangeEdad}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}