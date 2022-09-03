import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';


function Home() {

  let token = localStorage.getItem('token');

  const [ products, setProducts ] = useState([]);

    useEffect (()=>{
      const endPoint = `https://fakestoreapi.com/products/category/women's%20clothing`;
      axios.get(endPoint)
        .then(response =>{
          const apipData = response.data; 
          setProducts(apipData)
        })
    }, [setProducts]);


  return (
    <>

      { !token && <Navigate to='/' /> }

      { !setProducts && 
        <>
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                
            </div>
            
        </div>
        <span className="sr-only" >Loading...</span>
        </>
       }

       <div className='header__mb'> 
       <Header />
       </div>
      
      
      <div className='row  '>
      {
        products.map((el, i) =>{
          return (
            
            <div className='col-12 col-lg-3 col-md-6 ' key={i}>
            <div className="card card__xtra">
              <div className='card__imgcontainer'>
              <img src={el.image} className="card-img-top" alt={el.title} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{el.title.substring(0, 15)}...</h5>
                <p className="card-text">{el.description.substring(0, 45)}...</p>
                <Link to={`/detail?productID=${el.id}`} className="btn btn-success">View detail</Link>
              </div>
            </div>
            </div>
            
          )
        })
      }
 
      
    </div>
   
    
    </>
  )
}

export default Home