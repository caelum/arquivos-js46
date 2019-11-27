import React from 'react'
import './widget.css'

function Widget(props) {
  return (
    <div className="widget">{props.children}</div>
  );
}

export default Widget
