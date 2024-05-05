import { createContext, useState } from "react";
import runChat from "../Config/Config";

export const context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('');
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState('');

    const delayPara = (index,next)=>{
        setTimeout(function(){
            setResultData(prev =>prev+next)
        },75*index)
         
    }
    const newChat = ()=>{
        setLoading(false)
        setShowResults(false)
    }


    const onSent = async (prompt) => {
        setResultData('')
        setLoading(true)
        setShowResults(true)
        let respone;
        if(prompt !==undefined){
            respone = await runChat(prompt)
            setRecentPrompt(prompt)
            console.log(respone)
        }
        else{
            setPrevPrompt(prev=>[...prev,input])
            setRecentPrompt(input)
            respone = await runChat(input)
        }
        
        
        const response = await runChat(input)
        let resArray = response.split('**')
        let newArray='';
        for (let i=0;i<resArray.length;i++){
            if(i===0 || i%2!==1){
                newArray += resArray[i];
            }
            else{
                newArray += "<b>"+resArray[i]+'</b>'
            }
        }

        let newArray2 = newArray.split('*').join('</br>')
        let newResponseArray = newArray2.split(' ');
        for(let i=0; i<newResponseArray.length;i++){
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+ ' ')
        }
        setLoading(false)
        setInput('')
    }

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResults,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }
    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider