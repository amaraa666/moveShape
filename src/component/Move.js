import { useState } from "react"
import React, { useEffect } from 'react';



export default function MovingShape(){
    const myShape ={
        id: 0, 
        color: 'orange',
        type: "circle",
        x: 0,
        y: 0
    }
    const [shape  , setShape] = useState(myShape);
    const [btn  , setBtn] = useState('start');
    
    const app ={
        id: 0, 
        color: 'red',
        type: "circle",
        x: '5%',
        y: '5%'
    }
    const [myApple  , setMyApple] = useState(app);

    const StartMove = (e) =>{
        setBtn('Started')
        // console.log('apple',myApple.x)
        // console.log('shape' ,shape.x)
        // console.log('x',Boolean(myApple.x === shape.x))        
        // console.log("y",Boolean(myApple.y === shape.y))
        MovApp()
        if(e.key === "s"){
            // console.log(shape)
            const newObj = {...shape}
            newObj.y = '90%'
            setShape(newObj)
        }else if(e.key === 'w'){
            const newObj = {...shape}
            newObj.y = '5%'
            setShape(newObj)
        }else if(e.key === 'd'){
            const newObj = {...shape}
            newObj.x = "90%"
            setShape(newObj)
        }
        else if(e.key === 'a'){
            const newObj = {...shape}
            newObj.x = '5%'
            setShape(newObj)
        }
    }
    const MovApp =()=>{
        if(myApple.x === shape.x && myApple.y === shape.y){
            console.log(6)
            const newObjApp = {...myApple}
            newObjApp.x = '90%'
            newObjApp.y = '90%'
            setMyApple(newObjApp)
        }
    }
    return(
        <>
        <div className="col-4 p-2 d-flex flex-column gap-2">
            <div className="position-relative  bg-dark p-2" style={{height: '400px'}}>
                <div className="shape" style={{borderRadius: '5px' , width: '20px' , height: '20px' , position: 'absolute' , left: shape.x , top: shape.y , background: myShape.color, transition: '1s'}}></div>
                <div className="shape" style={{borderRadius: '50%' , width: '20px' , height: '20px' , position: 'absolute' , left: myApple.x , top: myApple.y , background: myApple.color}}></div>
            </div>
            <button onKeyDown={StartMove}>{btn}</button>
        </div>
        </>
    )
}