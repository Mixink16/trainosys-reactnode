import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/products'

const App = () => {
  return (
    <>

<form class = "pangalan">
<h1>POKEMON TRAINER</h1>
<label> First Name : <input type="text" name="firstName" /></label> <br/> <br/>
<label> Last Name : <input type="text" name="lastName" /> </label> <br/> <br/>
<label> Email : <input type="text" name="email" /> </label> <br/> <br/>
<label> Password : <input type="password" name="Password" /></label> <br/> <br/>
<button type="submit">Submit</button> <br/> <br/>

</form>

<Products>
  
</Products>
    </>
  )
}

export default App
