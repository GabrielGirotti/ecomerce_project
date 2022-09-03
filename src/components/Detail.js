import React from 'react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';



function Detalle() {

    let token = localStorage.getItem('token');

    const [ productDetalle, setProductDetalle ] = useState(null)

    let query = new URLSearchParams(window.location.search);
    let productID = query.get('productID');

    console.log(productID)

    useEffect(()=>{
        const endPoint = `https://fakestoreapi.com/products/${productID}`
        axios.get(endPoint)
            .then(response =>{
                const movieData = response.data;
                //console.log(movieData)
                setProductDetalle(movieData)
            })
            
    }, [setProductDetalle]);

  return (
    <>

    { !token && <Navigate to='/' /> }

    <div className='header__mb'>
    <Header />
    </div>

    <br /><br />

    { !productDetalle && 
        <>
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                
            </div>
            
        </div>
        <span className="sr-only" >Loading...</span>
        </>
    }

    {
        productDetalle &&
        <>
            
                    

            <div className='detalle__contenedor'>
                    <img src={productDetalle.image} alt={productDetalle.title} className='detalle__poster'/>
                    
                    <div className='detalle__desc'>
                        <h2>{productDetalle.title}</h2>
                        <h3>${productDetalle.price}.-</h3>
                        <br />
                        <h5>Description:</h5>
                        <p>{productDetalle.description}</p>
                        
                        
                    </div>

            </div>
                
              
           

            </>
          
       
    }

    </>
  )
}

export default Detalle