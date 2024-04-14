import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState('car');

  const {gif, loading, fetchData} = useGif(tag);


  return (
    <div className='w-1/2   bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl rounded-md font-bold border-black border-2 p-1 bg-white uppercase  '> Random {tag} Gif</h1>

    {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
    }

      <input 
        className='w-10/12 text-2xl font-bold  py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) =>  setTag(event.target.value)}
        value={tag}
 
      />
      

      <button onClick={() => fetchData(tag)}
      className="w-10/12 text-white text-2xl font-extrabold   bg-yellow-500   py-2 rounded-lg mb-[20px]">

       Generate

      </button>

    </div>
  )
}

export default Tag
