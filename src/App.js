import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastName: '',
      guests: [],
    };
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  handleChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  handleSubmit(e) {
    const name = this.state.name;
    const lastName = this.state.lastName;
    e.preventDefault();
    this.setState({
      name: '',
      lastName: '',
      guests: this.state.guests.concat({name: name, lastName: lastName})
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" value={this.state.name} onChange={this.handleChangeName.bind(this)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" value={this.state.lastName} onChange={this.handleChangeLastName.bind(this)}/>
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.guests.map((guest) => {
                  return (
                    <tr>
                      <td>{guest.name}</td>
                      <td>{guest.lastName}</td>
                    </tr>
                  )
                })}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App
