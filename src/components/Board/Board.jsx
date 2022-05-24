import './Board.css'
import { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
// import { useLayoutEffect } from 'react';

export const Board = () => {
 
    const [drawing, changeDrawing] = useState(false);
    const boardRef = useRef(null);
    const draw = (e) => {
        if(drawing){
            const board = boardRef.current;
            const ctx = board.getContext('2d');
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
        }
    };

    useEffect(() => {
        const canvas = document.getElementById('board');
        // const ctx = canvas.getContext('2d');
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        console.log("Hello");
    }, []);
    return (
        <div className="board-wrapper">
            <canvas id='board' ref={boardRef} onMouseDown={() => {changeDrawing(true)}} onMouseUp={()=>{changeDrawing(false); boardRef.current.getContext('2d').beginPath()}} onMouseMove={draw}></canvas>
        </div>
    );
}