import React, { useContext } from 'react'
import ReactSlider from 'react-slider'
import BackButton from './BackButton'
import SettingsContext from './SettingsContext'



const styles = {
    slider: 'h-10 border border-2 rounded-2xl w-72  max-w-lg m-auto ',
    thumb: 'bg-m-green absolute cursor-pointer w-10 z-100 h-10 border border-5 rounded-full block',
    track: 'relative bg-slate-400 bg-d-green',
    texts: 'text-d-green text-4xl font-bold mb-6 flex justify-center',
    text: `text-d-green text-lg font-bold`,
    button: `flex justify-center mt-20`,
    m: `mt-12`

}


function Settings() {
    const settingsInfo = useContext(SettingsContext)

  return (
    <div>
        <div className={styles.texts}>Settings</div>
        <div className={styles.m}> 
        <label className={styles.text}>work minutes: {settingsInfo.workMinutes}</label>
        <ReactSlider className={styles.slider}
            thumbClassName={styles.thumb}
            trackClassName={styles.track}
            value={settingsInfo.workMinutes}
            onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={100}
             />
        <label className={styles.text}>break minutes: {settingsInfo.breakMinutes}</label>
        <ReactSlider className={styles.slider}
            thumbClassName={styles.thumb}
            trackClassName={styles.track}
            value={settingsInfo.breakMinutes}
            onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
            min={1}
            max={100}
             />
             <div className={styles.button}>
             <BackButton  onClick={()=> {
                settingsInfo.setShowSettings(false)
             }}/>
             </div>
        </div>
    </div>
  )
}

export default Settings