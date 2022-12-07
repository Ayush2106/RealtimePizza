import React from 'react'

function Navbar() {
  return (
    <div>
         <nav class="container ">
<div class="navleft">
<img src = "/img/logo.png" alt = "logoOfPizza" />
</div>
<div class="navright">
        <li><a href="/">Menu</a></li>
        {/* <li><a href="#">Offers</a></li> */}
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/cart"><img src = "/img/cart.png" style={{backgroundColor: "orange",padding: "3px"}} alt = ""/></a></li>        
</div>
    </nav>
    </div>
  )
}

export default Navbar