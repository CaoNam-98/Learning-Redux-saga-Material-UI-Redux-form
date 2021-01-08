import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

class DefaultLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    // ...remainProp là 1 object chứa các thuộc tính còn lại của prop route là exact, path, name. component: YourComponent là đổi tên gọi thành YourComponent = route.component;
    return (
      <Route
        {...remainProps}
        render={(routeProps) => {
          return (
            <YourComponent {...routeProps} /> //{/*...routeProps chứa các đối tượng react-router-dom như match, history */}
          );
        }}
      />
    );
  }
}

DefaultLayoutRoute.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]), //index.js:1 Warning: Failed prop type: Invalid prop `component` of type `function` supplied to `AdminLayoutRoute`, expected `object`.
  exact: PropTypes.bool,
};

export default DefaultLayoutRoute;
