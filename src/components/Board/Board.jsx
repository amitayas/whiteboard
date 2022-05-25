import './Board.css'
import { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
// import { useLayoutEffect } from 'react';

export const Board = () => {
 
    const [drawing, changeDrawing] = useState(false);
    const [strokeColor, changeStrokeColor] = useState('black');
    const boardRef = useRef(null);
    const draw = (e) => {
        if(drawing){
            const board = boardRef.current;
            const rect = board.getBoundingClientRect();
            const ctx = board.getContext('2d');
            ctx.lineWidth = 1;
            ctx.lineCap = "round";
            ctx.lineTo(e.clientX - rect.left, e.clientY-rect.top);
            ctx.strokeStyle = strokeColor;
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
            <div id="color-picker">
                <div className="color black" onClick={()=>{changeStrokeColor('black')}}>⬛</div>
                <div className="color red" onClick={()=>{changeStrokeColor('red')}}>🟥</div>
                <div className="color blue" onClick={()=>{changeStrokeColor('blue')}}>🟦</div>
                <div className="color green" onClick={()=>{changeStrokeColor('green')}}>🟩</div>
            </div>
            <canvas id='board' ref={boardRef} onMouseDown={() => {changeDrawing(true)}} onMouseUp={()=>{changeDrawing(false); boardRef.current.getContext('2d').beginPath()}} onMouseMove={draw}></canvas>
        </div>
    );
}