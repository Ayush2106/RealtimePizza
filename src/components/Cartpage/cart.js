import React from 'react'

function cart() {
  return (
    <div>
        {/* <!-- emptycart --> */}
<section class="empty-cart">
    <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-2 ">Cart Empty</h2>
        <p class="text-gray-500">You probably haven't ordered a pizza yet.
            To order a pizza , go to main page
        </p>
        <img class="w-2/5 mx-auto" src ="/img/empty-cart.png" alt = "empty-cart"/>
        <a href="/"class="inline-block px-6 py-2 my-6 rounded-full btnorder">Go Back</a>

    </div>
</section> 

{/* <!-- itemsincart --> */}
<section class="itemincart py-5">
    <div class="order container mx-auto w-1/2">
        <div class="toppart flex items-center border-b border-gray-300 pb-4">
            <img  src = "/img/cart-black.png" alt = ""/>
            <h1>Order Summary</h1>
        </div>
        <div class="pizzalist">
            <div class="flex items-center my-8">
                <img class="w-24" src ="/img/pizza.png" alt ="" />
                <div class="flex-1 ml-4">
                    <h1>Marinara</h1>
                    <span>Medium</span>
                </div>
                <span class="flex-1">1pcs</span>
                <span class="font=bold text-lg">Rs.300</span>
            </div>
            <div class="flex items-center my-8">
                <img class="w-24" src ="/img/pizza.png" alt ="" />
                <div class="flex-1 ml-4">
                    <h1>Marinara</h1>
                    <span>Medium</span>
                </div>
                <span class="flex-1">1pcs</span>
                <span class="font=bold text-lg">Rs.300</span>
            </div>

            <div class="flex items-center my-8">
                <img class="w-24" src ="/img/pizza.png" alt ="" />
                <div class="flex-1 ml-4">
                    <h1>Marinara</h1>
                    <span>Medium</span>
                </div>
                <span class="flex-1">1pcs</span>
                <span class="font=bold text-lg">Rs.300</span>
            </div>
<hr/>
<div class="text-right py-4">
    <div>
        <span class="text-lg font-bold">Total</span>
        <span class="amount text-2xl font-bold ml-2">300</span>
    </div>
    <div>
        <form action="">
            <input class="border border-gray-400 p-2 w-1/2 my-3 " placeholder="Phone number" type="text" />
            <input class="border border-gray-400 p-2 w-1/2 " placeholder="Amount" type="text" />
        </form>
        <button style={{backgroundColor: '#FE5F1E' , marginTop: '5px'}} class = "btnorder"  type="submit">Order Now</button>
    </div>
</div>

        </div>
    </div>
</section>
    </div>
  )
}

export default cart