import React, { Component } from 'react';

const API = 'https://server-node-example.herokuapp.com/produtos';

    class App extends Component {

      constructor(props) {
    super(props);
 
    this.state = {
      produtos: [],
    };
  }

   componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ produtos: data }));
    }

      render() {
        const { produtos } = this.state;

        return (
          <ul>
            {produtos.map(item => (
              <div class="card">
              <div class="card-body">
                <h5 class="card-title">{item.nome}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{item.valor}</h6>
                <p class="card-text">{item.descricao}</p>
              </div>
            </div>
            ))}
          </ul>
        );
      }
    }

    export default App;

 