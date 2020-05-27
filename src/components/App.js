import React from "react";

const App = () => {
  return (
		<div className='margen'>
			<table className='tabla'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fernando</td>
            <td>fertorresmx@gmail.com</td>
            <td>@fertorresmx</td>
          </tr>
          <tr>
            <td>Alejandro</td>
            <td>fertorresmx2@gmail.com</td>
            <td>@alejandro</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
