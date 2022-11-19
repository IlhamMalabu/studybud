import React, {useContext, useState, useEffect, useRef} from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import SettingsContext from './SettingsContext';
import sound from './sound.mp3'

const style = {
    text: "items-center justify-center flex",
    main: `w-80 h-80`,
    buttons: `flex items-center justify-center mt-12`,
    button: ``
}

function Timer() {

    const settingsInfo = useContext(SettingsContext)

    const [isPaused, setIsPaused] = useState(true)
    const [secondsLeft, setSecondsLeft] = useState(0)
    const [mode, setMode] = useState('work')

    const secondsLeftRef = useRef(secondsLeft)
    const isPausedRef = useRef(isPaused)
    const modeRef = useRef(mode)

    let audio = new Audio(sound)

   
    function tick() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current)
    }

    function InitTimer(){
        secondsLeftRef.current = settingsInfo.workMinutes * 60
        setSecondsLeft(secondsLeftRef.current);
        
    }

    function switchMode(){
        const nextMode = modeRef.current === 'work' ? 'break' : 'work'
        const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes  : settingsInfo.breakMinutes ) * 60
        setMode(nextMode)
        modeRef.currrent = nextMode
        setSecondsLeft(nextSeconds)
        secondsLeftRef.current = nextSeconds
    }

   

    useEffect(()=>{
        InitTimer()
        const interval = setInterval(()=> {
            if(isPausedRef.current){
                return
            }
            if(secondsLeftRef.current === 0){
                audio.play()
                if(modeRef.current === "work"){
                    if(window.confirm("Work session ended. Do you want to start a break?")){
                        return switchMode()
                    }else{
                        return isPausedRef.current === true
                    }
                }
                if(modeRef.current === 'break'){
                    if(window.confirm("Break session ended. Do you want to start work?")){
                        return switchMode()
                    }else{
                        return isPausedRef.current === true
                    }
                }
            }

            tick()
        }, 1000)

        return () => clearInterval(interval)
    }, [settingsInfo])

    const totalSeconds = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60
    const percentage = Math.round(secondsLeft / totalSeconds * 100)

    const minutes = Math.floor(secondsLeft / 60)
    let seconds = secondsLeft % 60
    if(seconds < 10) seconds = '0' + seconds

  return (
    <div className={style.main} >
   
    <CircularProgressbar value={percentage} text={minutes + ':' + seconds } styles={buildStyles({
        textColor: 'black',
        pathColor: '#5F8D4E',
        trailColor: '#E5E3C9'
    })} />
    <div className={style.buttons}>
    <div  >
        {isPaused ?  <PlayButton className={style.button} onClick={()=> {setIsPaused(false); isPausedRef.current = false}}/> : <PauseButton className={style.button} onClick={()=> {setIsPaused(true); isPausedRef.current = true}} /> }
    </div>
    <div>
        <SettingsButton onClick={()=>{settingsInfo.setShowSettings(true)}}/>
    </div>
    </div>
   
  </div>
  )
}

export default Timer