import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const handeForm = ( e) =>{
 
  e.preventDefault()
  const formData = new FormData(e.target)
  const obj = Object.fromEntries(formData.entries())
  console.log(obj)
 }

  return (
  <>

  <h1>Fill Your Form</h1>
  <div className='App'>
   


    <form action=""  onSubmit={handeForm}>
      <input type="text " placeholder='Enter Your First Name '  name='Name '/>
      <br /><br />

      <input type="text " placeholder='Enter Your First Name ' name=' Last Name ' /> <br /> <br />
      <input type="email " placeholder='Enter Your Vaild Mail ' name='email ' /> <br /> <br />
      <input type= 'password' placeholder='Enter Your Vaild Email PassWord' name='Password'  required/> <br /> <br />
      <input type="number" placeholder='Emter your Age' name='age ' />  <br /> <br /> 
      <input type="text" placeholder='Enter Your city Name '  name='City'/> <br /> <br />
      
      <button type='submit'> submit</button>


    </form>
  </div>
  </>
  )
}

export default App
