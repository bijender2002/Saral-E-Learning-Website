import React, { useState } from 'react';
import Courses from './Courses';
function Navbar(props) {
  const [value, setValue] = useState("");

  const SearchText = (e) => {
    const newword = e.target.value
    setValue(newword.toLowerCase())
  }

  return (
    <>
      <nav class="navbar navbar-dark bg-primary">
        <a href='http://localhost:3000/' class="navbar-brand navbar-toggler" style={{ color: 'orange' }}>
          Saral
        </a>
        <a href="https://navgurukul.org/index.html#page-top" target="_blank" class="navbar-brand navbar-toggler" >
          <img src="https://navgurukul.org/assets/img/logo.png" style={{ width: '8vw', }}></img>
        </a>

        <div>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search"
              placeholder="Search" aria-label="Search" value={value} onChange={SearchText}>

            </input>
          </form>
        </div>
      </nav>
      <h2 className="heading text-center my-5" style={{ fontWeight: 'bold', color: 'blue' }}>LEARN AND MAKE YOURSELF PERFECT IN CODING</h2>

      {value ? <Courses searchProps={value} /> : null}

    </>
  )
}
export default Navbar;