import React, {useState} from 'react'
import Timer from './Timer'
import Settings from './Settings'
import SettingsContext from './SettingsContext';
const styles = {
  main: `mt-20 mb-20`
}

function Pomodoro() {

    const [showSettings, setShowSettings] = useState(false);
    const [workMinutes, setWorkMinutes] = useState(45)
    const [breakMinutes, setBreakMinutes] = useState(15)
  return (
    <div className={styles.main}>
        <SettingsContext.Provider value={{
            showSettings,
            setShowSettings,
            workMinutes ,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes
        }} >
        {showSettings ?  <Settings /> : <Timer /> }    
        </SettingsContext.Provider>
    </div>
  )
}

export default Pomodoro