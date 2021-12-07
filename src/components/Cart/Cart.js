import React from 'react';
import "./Cart.css";
const Cart = (props) => {
    //destructuring the passed object from props
const {cart,movieList}=props;

//total is the price amount variable
let total=0;
for(const single of cart){
    total+=single.ticketPrice;
}
    return (
        <div className="cart-bg">
<h3>Your order Summary</h3>
<hr />
<h4>Total Ticket Purchased:  {cart.length} </h4>
<h4>Total bill: {total}</h4>
<hr />
<h3>Your Watchlist: </h3>
{
    movieList.map(list=> <li>{list}</li>)
}
        </div>
    )
}

export default Cart;