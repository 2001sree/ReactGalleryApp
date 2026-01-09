import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import './App.css';

const App = () => {
  const[images,setImages]=useState([]);
  const[loading,setLoading]=useState(true);
  const[page,setPage]=useState(1);
  const limit = 25;

  const fetchImages=async ()=>{
    try{
      // using axios for fetching the url :
      // const response= await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
      // setImages(response.data);
      // setLoading(false);
      //using the fetch for fethcing the url:
      const responcse= await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
      const data= await responcse.json();
      setImages(data);
      setLoading(false);

    }
    catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
    fetchImages();
  },[page]);

  const previousHandler=()=>{
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };
  const nextHandler=()=>{
    setPage(prev => prev + 1);
  };

  return (
    <div className='app'>
      <h1>Image Gallery</h1>
      {loading?(<p className='loading'>Loading.......</p>):(
        <div className='gallery'>
          {images.map((img)=>(
            <div className='card' key={img.id}>
              <img src={img.download_url} alt='images'/>
              <p>{img.author}</p>
            </div>
          ))}
        </div>
      )}
       <div className='pagination'>
        <button onClick={previousHandler} disabled={page===1}>Previous</button>
        <span> Page: {page} </span>
        <button onClick={nextHandler}>Next</button>
        </div>
    </div>
  );
};

export default App