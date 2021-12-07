//main body of the project
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Movie from '../Movie/Movie';
import "./Movies.css";

const Movies = () => {
const [movies,setMovies]=useState([]);
const [cart,setCart]=useState([]);
const [name,setNames]=useState([]);

//loading static data from data.json file that is on the public folder
useEffect(()=>{
    fetch("./data.JSON")
    .then(res=>res.json())
    .then(data=>setMovies(data));
},[]);
let total=0;

//update the cart component every time click halnder is called
const getCartVal=(movie)=>{
    total++;
    //update the existing cart array after clicking each item
    const newCart=[...cart,movie];
    setCart(newCart);

    //get the individual selected movies and update their name on the name array
    if(name.indexOf(movie.title)===-1){
    const newMovieName=[...name,movie.title];
    setNames(newMovieName);
    }
}
    return (
        <div className="container">
             <div className="cart-details">
                 {/* pass key, cart and selected movie title to the cart component */}
            <Cart
            key={total}
            cart={cart}
            movieList={name}
            >
            </Cart>
            </div>

            <div className="movie-poster">
                {
                    // pass the movie id as key, the whole movie object to the Movie component & updating the cart
                    movies.map(movie=><Movie
                        key={movie.id}
                        movie={movie}
                        getCartVal={getCartVal}>
                        </Movie>)

                }
            </div>
        </div>
    );
};

export default Movies;