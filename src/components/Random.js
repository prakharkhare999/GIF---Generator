import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {


  const {gif, loading, fetchData} = useGif();


  return (
    <div className='w-1/2   bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px] '>

      <h1 className='mt-[15px]  font-bold border-black border-2 rounded-md p-1 text-2xl bg-white  uppercase font-bold'>Random Gif</h1>

    {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
    }

      

      <button onClick={() => fetchData()}
      className="w-10/12  font-extrabold text-2xl text-white bg-yellow-500   py-2 rounded-lg mb-[20px]">

       Generate

      </button>

    </div>
  )
}

export default Random
