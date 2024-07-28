import React, { useEffect, useRef, useState } from 'react'

// const Stopwatch = () => {

//     const [isRunning, setIsRunning] = useState(false);
//     const [elapsedTime, setElapsedTime] = useState(0);
//     const intervalID = useRef(null);
//     const startTimeRef = useRef(0);

//     useEffect(()=>{
//         if(isRunning){
//             intervalID.current = setInterval(() => {
//                 setElapsedTime(Date.now() - startTimeRef.current);
//             }, 10);
//         }

//         return () => {
//             clearInterval(intervalID.current);
//         }
//     }, [isRunning])

//     function Start(){
//         setIsRunning(true);
//         startTimeRef.current = Date.now() - elapsedTime;
//         console.log(startTimeRef);
//     }

//     function Stop(){
//         setIsRunning(false);
//     }

//     function Reset() {
//         setElapsedTime(0);
//         setIsRunning(false);
//     }

//     function formatTime(){
//         let seconds = Math.floor((elapsedTime / 1000) % 60);
//         let milliseconds = Math.floor((elapsedTime % 1000) / 10);
//         // return `${seconds} : ${milliseconds}`
//         return `${seconds} : ${milliseconds < 10 ? '0' + milliseconds : milliseconds}`;
//     }

//   return (
//     <div>
//       <h1>Stopwatch</h1>
//       <p>Time: {formatTime()}</p>
//       {isRunning ? (
//         <button onClick={Stop}>Stop</button>
//           ) : (
//           <button onClick={Start}>Start</button>
//     )}
//       <button onClick={Reset}>Reset</button>
//     </div>
//   )
// }

export default function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(()=>{
        let intervalID;
        if(isRunning){
            intervalID = setInterval(() => {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
            }, 1000);
        }else{
            clearInterval(intervalID);
        }

        return () => clearInterval(intervalID);
    }, [isRunning]);

    const startStop = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    const reset = () => {
        setIsRunning(false);
        setElapsedTime(0);
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds/60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0":""}${remainingSeconds}`;
    };

    return(
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {formatTime(elapsedTime)}</p>
            <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
            <button onClick={reset}>Reset</button>
        </div>
    )



}