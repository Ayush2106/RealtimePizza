import React from 'react'

function Homepage() {
  return (
    <div>
           {/* <!-- HEROPAGE */}
    
     <section class="hero">
        <div class="heroleft">
            <div >
<p><em>Are You Hungry ?</em></p>   
<h1 class="heading font-bold">Don't Wait ?</h1>  
<button type="menu" class="btnorder">Order Now</button>
</div>

 </div>
        <div class="heroright">
            <img src ="/img/pizza.png" alt = "pizza"/>
        </div>
     </section>

     {/* <!-- Menupage --> */}
     <div class="menupage grid grid-cols-4">
        {/* <!-- card --> */}
        <div class="rounded overflow-hidden shadow-lg">
            <img style={{width:'120px' , paddingTop:'20px'}} class="mx-auto " src="/img/pizza.png" alt="pizza logo"/>
            <div class="info" >
                  <p class="text-lg">Margharita</p>
                  <p class="size text-xs rounded-full uppercase">Medium</p>
            </div>
            <div class=" priceadd px-6 pt-4 pb-2 ">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rs.250</span>
              <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2  btnorder">+ADD</span>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg">
            <img  style={{width:'120px' , paddingTop:'20px'}} class="mx-auto" src="/img/pizza.png" alt="pizza logo"/>
            <div class="info" >
                  <p class="text-lg">Margharita</p>
                  <p class="size text-xs rounded-full uppercase">Medium</p>
            </div>
            <div class=" priceadd px-6 pt-4 pb-2 ">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rs.250</span>
              <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2  btnorder">+ADD</span>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg">
            <img style={{width:'120px' , paddingTop:'20px'}} class="mx-auto" src="/img/pizza.png" alt="pizza logo"/>
            <div class="info" >
                  <p class="text-lg">Margharita</p>
                  <p class="size text-xs rounded-full uppercase">Medium</p>
            </div>
            <div class=" priceadd px-6 pt-4 pb-2 ">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rs.250</span>
              <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2  btnorder">+ADD</span>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg" >
            <img style={{width:'120px' , paddingTop:'20px'}} class="mx-auto" src="/img/pizza.png" alt="pizza logo"/>
            <div class="info" >
                  <p class="text-lg">Margharita</p>
                  <p class="size text-xs rounded-full uppercase">Medium</p>
            </div>
            <div class=" priceadd px-6 pt-4 pb-2 ">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rs.250</span>
              <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2  btnorder">+ADD</span>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg" >
            <img style={{width:'120px' , paddingTop:'20px'}} class="mx-auto" src="/img/pizza.png" alt="pizza logo"/>
            <div class="info" >
                  <p class="text-lg">Margharita</p>
                  <p class="size text-xs rounded-full uppercase">Medium</p>
            </div>
            <div class=" priceadd px-6 pt-4 pb-2 ">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rs.250</span>
              <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2  btnorder">+ADD</span>
            </div>
          </div>

     </div>
    </div>
  )
}

export default Homepage 