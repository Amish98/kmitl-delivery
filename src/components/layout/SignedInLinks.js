import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {signOut } from '../../store/actions/authActions'
const logo = require('./logo.jpg');
const SignedInLinks = (props) => {
  return (
    <div>
       <img class="media-obj" src={logo} height="60" width = "67"/>
      <Link to='/' className="brand-logo ">KMITL Delivery</Link>
      <ul className="right">
        <li><NavLink to='/place'>Place order</NavLink></li>
        <li><NavLink to='/manage'>Manage Payment</NavLink></li>
        <li><NavLink to='/history'>History</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)