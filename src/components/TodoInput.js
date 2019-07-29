import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              className="form-control text-capitalize"
              placeholder="Add Item"
              value={item}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn-block btn btn-primary mt-3 text-uppercase"
            >
              add item
            </button>
          </div>
        </form>
      </div>
    );
  }
}
