import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
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
    }
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
