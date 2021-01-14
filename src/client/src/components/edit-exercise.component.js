import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nombre: this.props.match.params.nombre,
      description: '',
      duration: 0,
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://'+window.location.hostname+':'+window.location.port+'/myRoutines/listEjercicios/',  {'data':{"nombre": this.props.match.params.nombre}})
      .then(response => {
        this.setState({
          nombre: response.data.nombre,
          descripcion: response.data.descripcion,
          duracion: response.data.duracion
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://'+window.location.hostname+':'+window.location.port+'/users')
      .then(response => {
        if (response.data.model.length > 0) {
          this.setState({
            users: response.data.model.map(user => user.username),
            username: response.data.model[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
      
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      nombre: this.props.match.params.nombre,
      descripcion: this.state.description,
      duracion: this.state.duration
    }
    console.log(this.props.match.params)
    console.log(exercise);

    axios.put('http://'+window.location.hostname+':'+window.location.port+'/myRoutines/updateEjercicio', exercise)
      .then(res => console.log(res.data));

      window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}