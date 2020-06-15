// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import APP from './App';
// import * as serviceWorker from './serviceWorker';
//
//
//
// ReactDOM.render(
//   // <React.StrictMode>
//     <APP />,
//   // </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [], text: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   render() {
//     return (
//       <div>
//         <h3>TODO</h3>
//
//         <TodoList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="new-todo">
//             What needs to be done?
//           </label>
//           <input
//             id="new-todo"
//             onChange={this.handleChange}
//             value={this.state.text}
//           />
//           <button>
//             Add #{this.state.items.length + 1}
//           </button>
//         </form>
//       </div>
//     );
//   }
//
//   handleChange(e) {
//     this.setState({ text: e.target.value });
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     if (this.state.text.length === 0) {
//       return;
//     }
//     const newItem = {
//       text: this.state.text,
//       id: Date.now()
//     };
//     this.setState(state => ({
//       items: state.items.concat(newItem),
//       text: ''
//     }));
//   }
// }
//
// class TodoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map(item => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     );
//   }
// }
//
// ReactDOM.render(
//   <TodoApp />,
//   document.getElementById('root')
// );





import React from 'react';
import ReactDOM from 'react-dom';


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [],text:'' };
    this.handleTableChange = this.handleTableChange.bind(this);
    this.handleChickenChange = this.handleChickenChange.bind(this);
    this.handlePepsiChange = this.handlePepsiChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3> First & Friend Fried Chicken</h3>
        <TodoList items={this.state.items} />
        What would you like to order?

        <form onSubmit={this.handleSubmit}>

          <label> Table: </label>
          <input onChange={this.handleTableChange}  /> <br/>

          <label > Chicken: </label>
          <input onChange={this.handleChickenChange} /><br/>

          <label > Pepsi: </label>
          <input onChange={this.handlePepsiChange} /><br/>

          <button> Add new order </button>
        </form>
      </div>
    );
  }
  handleTableChange(e) {
    this.setState({ table: e.target.value });
  }

  handleChickenChange(e) {
    this.setState({ chicken: e.target.value });
  }

  handlePepsiChange(e) {
    this.setState({ pepsi: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.table.length === 0) {
      return;
    }
    const newItem = {
      text: 'Table: '+  this.state.table+ '  Chicken :'+ this.state.chicken +
      '  Pepsi :'+ this.state.pepsi + ',  Total : '+(this.state.chicken*15 + this.state.pepsi*7),
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
