import React, { PropTypes } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Util from "../Util/Util";

class ListItem extends React.Component {
  render() {
    const { props } = this;
    const Tag = props.tag;

    const excludeProps = ["children", "className", "tag", "transition"];

    // Uses all passed properties as attributes, excluding propTypes
    const attributes = Util.exclude(props, excludeProps) || {};

    if (props.transition) {
      return (
        <ReactCSSTransitionGroup
          {...attributes}
          className={props.className}
          component={props.tag}
        >
          {props.children}
        </ReactCSSTransitionGroup>
      );
    }

    return (
      <Tag {...attributes} className={props.className}>
        {props.children}
      </Tag>
    );
  }
}

ListItem.defaultProps = {
  className: "list-item",
  tag: "li"
};

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
  transition: PropTypes.bool
};

module.exports = ListItem;
