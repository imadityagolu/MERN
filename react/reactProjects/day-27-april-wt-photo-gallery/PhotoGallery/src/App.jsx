import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useRef } from 'react'
import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
<span class="navbar-brand">
<a href="/" style="text-decoration: none; color: black;">GeekGallery</a>
</span>
<button aria-controls="navbarScroll" type="button" aria-label="Toggle navigation" class="navbar-toggler">
<span class="navbar-toggler-icon"></span>
</button>
<div class="navbar-collapse collapse show" id="navbarScroll" style="">
<div class="me-auto my-2 my-lg-0 navbar-nav navbar-nav-scroll" style="max-height: 100px;"></div>
<form class="d-flex">
<input placeholder="Search" aria-label="Search" type="search" class="me-2 form-control"></input>
<button type="button" class="btn btn-outline-success">Search</button>
</form></div></div></nav>

    </>
  )
}

export default App
