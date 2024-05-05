import React, { useContext, useState } from 'react'
import './NavBar.css'
import { CiMenuBurger } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { LuMessageSquarePlus } from "react-icons/lu";
import { context } from '../../Context/Context';

const NavBar = () => {
    const [navbar, setnavbar] = useState(false)
    const { onSent, prevPrompt, setRecentPrompt,newChat } = useContext(context)
    const loadprompt = async (prompt)=>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
    return (
        <div className='NavBar'>
            <div className="top">
                <h1 className='menu' onClick={() => setnavbar(prev => !prev)}><CiMenuBurger className='img' /></h1>
                <div className="new-chat" onClick={()=>newChat()}>
                    <h1><FiPlus className='img' /></h1>
                    {navbar ? <p>New Chat</p> : null}
                </div>
                {navbar ? <div className="recent">
                    <p className='recent-title'>Recent</p>
                    {prevPrompt.map((item, i) => {
                        return (
                            <div className="recent-entry" onClick={()=>{loadprompt(item)}}>
                                <h1><LuMessageSquarePlus className='img' /></h1>
                                <p>{item}...</p>
                            </div>
                        )
                    })}

                </div> : null}
            </div>
            <div className="bottom">
              
            </div>
        </div>
    )
}

export default NavBar