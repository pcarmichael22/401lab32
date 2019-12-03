import React from 'react';
import uuid from 'uuid/v4';
import Form from './form';
import List from './list';
import Details from './details';

import './todo.scss';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      item: {},
      showDetails: false,
      details: {}
    };
  }

  handleInputChange = e => {
    this.setState({
      item: { ...this.state.item, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    this.props.handleSubmit(this.state.item);
  };

  addItem = e => {
    e.preventDefault();
    e.target.reset();

    const defaults = { _id: uuid(), complete: false };
    const item = Object.assign({}, this.state.item, defaults);

    this.setState({
      todoList: [...this.state.todoList, item],
      item: {}
    });
  };

  deleteItem = id => {
    this.setState({
      todoList: this.state.todoList.filter(item => item._id !== id)
    });
  };

  saveItem = updatedItem => {
    this.setState({
      todoList: this.state.todoList.map(item =>
        item._id === updatedItem._id ? updatedItem : item
      )
    });
  };

  toggleComplete = id => {
    let item = this.state.todoList.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      this.saveItem(item);
    }
  };

  toggleDetails = id => {
    let showDetails = !this.state.showDetails;
    let details = this.state.todoList.filter(item => item._id === id)[0] || {};
    this.setState({ details, showDetails });
  };

  render() {
    return (
      <>
        <header>
          <h2>
            There are
            {this.state.todoList.filter(item => !item.complete).length}
            Items To Complete
          </h2>
        </header>

        <section className="todo">
          <Form />
          <List />
        </section>
        <Details />
      </>
    );
  }
}

export default ToDo;
