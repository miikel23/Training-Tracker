import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeDescripcion = this.onChangeDescripcion.bind(this);
    this.onChangeDuracion = this.onChangeDuracion.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePublic = this.onChangePublic.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nombre: '',
      descripcion: '',
      duracion: 0,
      username:'',
      public: false,
      users: []
    }
  }

  //recuperamos los usuarios creados
  componentDidMount() {
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

  onChangeNombre(e) {
    this.setState({
      nombre: e.target.value
    })
  }

  onChangeDescripcion(e) {
    this.setState({
      descripcion: e.target.value
    })
  }

  onChangeDuracion(e) {
    this.setState({
      duracion: e.target.value
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePublic(e) {
    this.setState({
      public: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      nombre: this.state.nombre,
      descripcion: this.state.descripcion,
      duracion: this.state.duracion,
      username: this.state.username,
      public: this.state.public
    }

    console.log(exercise);

    axios.post('http://'+window.location.hostname+':'+window.location.port+'/myRoutines/submitEjercicio', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Nombre: </label>
            <input 
              type="text" 
              className="form-control"
              value={this.state.nombre}
              onChange={this.onChangeNombre}
            />
        </div>
        <div className="form-group"> 
          <label>Descripcion: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.descripcion}
              onChange={this.onChangeDescripcion}
              />
        </div>
        <div className="form-group">
          <label>Duracion (en minutos): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duracion}
              onChange={this.onChangeDuracion}
              />
        </div>
        <div className="form-group">
          <label>Username: </label>
          <div>
            <select 
              type="text" 
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >{
              this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
            }
            </select>
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Crear Ejercicio" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}