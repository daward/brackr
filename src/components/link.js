import React from 'react'
import { self } from '../constants'
export default function Link(props) {

  let to = props.to || self + props.toPath
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState(null, null, to);
    window.dispatchEvent(new window.PopStateEvent('popstate'));
  };

  return <a href={to} onClick={onClick}>{props.children}</a>
}