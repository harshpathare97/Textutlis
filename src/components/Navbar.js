import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
      
      <form className="d-flex form-check form-switch" style={{backgroundColor:props.mode==='dark'?'#212529':'#f8f9fa', color: props.mode === 'dark' ? 'white' : 'black'}}>
      <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </form>
    </div>
    </nav>
    )
}

Navbar.propTypes={title:PropTypes.string}

Navbar.defaultProps={
    title:'Set title here'
}