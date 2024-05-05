import './Main.css'
import React from 'react'
import teja from '../MainContent/tejaReddy.jpg'
import { FaRegCompass } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useContext } from 'react';
import { context } from '../../Context/Context';
import { SiGooglegemini } from "react-icons/si";

const Main = () => {
  const { onSent, recentPrompt, showResults, loading, resultData, setInput, input } = useContext(context)
  return (
    <div className='main'>
      <div className='nav'>
        <p>Teja Reddy AI</p>
        <img src={teja} alt=''></img>
      </div>
      <div className="mainContainer">
        {!showResults ? <>  <div className="greet">
          <span>Hello! Welcome to Teja AI</span>
          <p>Feel free to ask anything...</p>
        </div>
          <div className="cards">
            <div className="card">
              <p>Passionate about web development, integrating new open-source libraries for pages.</p>
              <h1><FaRegCompass className='h1' /><span>Teja Reddy</span></h1>
            </div>
            <div className="card">
              <p>Interested in learning trending topics for expanding knowledge and skills.</p>
              <h1><IoBulbOutline className='h1' /><span>Teja Reddy</span></h1>
            </div>
            <div className="card">
              <p>I believe I built this proficiently and to the best AI clone.</p>
              <h1><FiMessageCircle className='h1'/><span>Teja Reddy</span></h1>
            </div>
            <div className="card">
              <p>I meticulously crafted this project, blending Gemini's inspiration with Generative AI features.</p>
              <h1 id='lastCard'><span>Teja Reddy</span><FaCode className='h1' /></h1>
            </div>
          </div></> :
          <div className='results'>
            <div className="resultTitle">
              <img src={teja} alt='' />
              <p>{recentPrompt}</p>
            </div>
            <div className="resultData">
              <h1><SiGooglegemini /></h1>
              {loading ? <div className='Loader'>
                <hr />
                <hr />
                <hr />
              </div> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
            </div>
          </div>}
        <div className="mainBottom">
          <div className="search">
            <input onChange={(e) => { setInput(e.target.value) }} value={input} type='text' placeholder='Enter prompt here '></input>
            <div className='search-box'>
              <h1><IoSend className='img' onClick={() => onSent()} /></h1>
            </div>
          </div>
          <p className="bottomInfo">
            May i display inaccurate info, including about people, so double-check its responses.
            <span>Thank You !</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main