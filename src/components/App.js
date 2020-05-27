import React, { Component } from "react";
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: []
    }
  }

  async componentDidMount() {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('respuesta:', respuesta);
    this.setState({
      usuarios: [
        {
          nombre: 'Fernando',
          correo: 'fertorresmx@gmail.com',
          enlace: '@fertorresmx'
        },
        {
          nombre: 'Alejandro',
          correo: 'fertorresmx2@gmail.com',
          enlace: '@alejandro'
        }
      ]
    })
  }

  ponerFilas = () => (
    this.state.usuarios.map((usuario) => (
      <tr>
        <td>
          { usuario.nombre }
        </td>
        <td>
          { usuario.correo }
        </td>
        <td>
          { usuario.enlace }
        </td>
      </tr>
    ))
    );

    render () {
      console.log(this.state.usuarios);
      return (
        <div className = 'margen'>
        <table className = 'tabla'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>
            { this.ponerFilas() }
          </tbody>
        </table>
      </div>
    );
  }
};

export default App;
