import React from 'react'

const style = {
    bg : `sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30 flex items-center md:justify-between lg:justify-between py-5 px-10 bg-l-green `,
    headText : `text-d-green text-4xl font-extrabold flex justify-center`,
}

function Dashboard() {
  return (
    <div className={style.bg}>
        <div className={style.headText}>Studybud.</div>
        <ul className = "flex invisible  md:items-center lg:items-center md:visible lg:visible">
        <li className ="px-2 text-d-green text-lg font-bold">Pomodoro</li>
        <li className="px-2 text-d-green text-lg font-bold">To-do</li>
        <li className="px-2 text-d-green text-lg font-bold"><a href="https://distracted-jepsen-cf513e.netlify.app/" target="_blank">GPA Calculator</a></li>
        </ul>

    </div>
  )
}

export default Dashboard