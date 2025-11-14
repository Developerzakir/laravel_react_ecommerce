import React from "react";
import { useParams } from "react-router-dom";

export function withRouter(Component) {
  return function Wrapper(props) {
    const params = useParams();
    return React.createElement(Component, { ...props, params });
  };
}