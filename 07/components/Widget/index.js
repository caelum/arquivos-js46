import React from 'react'
import './widget.css'

export default function Widget(props) {
  return (
    <div className="widget">{props.children}</div>
  );
}
