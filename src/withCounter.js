// hoc ->
// function -> component -> return a new component
import React from "react";

const hocFunction = (Component, number = 1) => {
  class NewComponent extends React.Component {
    state = {
      count: 0
    };

    handleClick = () => {
      this.setState((prevState) => ({
        count: prevState.count + number
      }));
    };

    render() {
      return (
        <Component
          {...this.props}
          count={this.state.count}
          handleClick={this.handleClick}
        />
      );
    }
  }

  return NewComponent;
};

export default hocFunction;
