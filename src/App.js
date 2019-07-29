import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// Vscode Config
state = {
  items: [{ id: 1, title: "A" }, { id: 2, title: "B" }, { id: 3, title: "C" }],
  id: uuid(),
  item: "",
  editItem: false
};
handleChange = e => {
  console.log();
};
handleSubmit = e => {
  console.log();
};
clearList = () => {
  console.log();
};
handleEdit = id => {
  console.log();
};
handleDelete = id => {
  console.log();
};
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleChange}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
