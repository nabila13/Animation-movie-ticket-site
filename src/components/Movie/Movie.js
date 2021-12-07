import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Movie.css"


const Movie = (props) => {
    //using font awesome icons
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    //destructuring the passed object from props
    const {img,director, title,cast,totalView,ticketPrice}=props.movie;

    return (
        <div className="card">
            <img src={img} alt="images" width="150px" height="150px"/>
            <h5>Movie Title: {title}</h5>
            <h6>Directed By: {director}</h6>
            <h6>Cast: {cast}</h6>
            <p>Total Views: {totalView}</p>
            <p>Per Ticket Price: {ticketPrice}</p>
            <button onClick={()=>props.getCartVal(props.movie)}> {element} Add to cart</button>

        </div>
    )
}

export default Movie;