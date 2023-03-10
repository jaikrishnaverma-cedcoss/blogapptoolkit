import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  setSeesionIndex } from '../Features/DataSlice'
import { Mystate } from './MainTypeScript'

const Nav = () => {
  const nav = useNavigate()
  const state: Mystate = useSelector((state:Mystate) => state)
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  //for userName
  useEffect(() => {
    if (state.sessionIndex !== -1)
      setName(state.users[state.sessionIndex].name)
    else
      setName('Guest user')
  }, [state.sessionIndex, state.users])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top px-sm-5" style={{ backgroundColor: '#7430f9 ', color: 'white' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => nav('/')}>#JaiBlog</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={() => nav('/')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link dsabled"  >{(state.sessionIndex == -1) ? <span className='text-white' onClick={() => nav('/login')}>Log in</span> : <span className='text-white' onClick={() => { dispatch(setSeesionIndex(-1)); nav('/login') }}>Log Out</span>}</a>
            </li>
          </ul>
          <form className="d-flex">
              <h5 className="m-auto me-3"  >{name}</h5>
   
        <button className="btn btn-light" onClick={() => nav('/add')}>+ Add Post</button>
      </form>
        </div>
      </div>
    </nav>
  )
}

export default Nav