import React from 'react'
import { Link } from 'react-router-dom'
const Bookpage = () => {

    const showMessage=()=>{
      alert("Done");
    }
  return (
    <div className='book-trial' id='trial'>
    <h1>Book a Trial</h1>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" required />

      <button type="submit" onClick={showMessage}><Link to="/">Submit</Link></button>
    </form>
  </div>
  )
}

export default Bookpage