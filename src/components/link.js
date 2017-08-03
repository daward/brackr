import React from 'react'
import { self } from '../constants'
export default function Link(props) {

  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState(null, null, props.to);
    window.dispatchEvent(new window.PopStateEvent('popstate'));
  };

  let to = props.to || self + props.toPath

  return <a href={to} onClick={onClick}>{props.children}</a>
}