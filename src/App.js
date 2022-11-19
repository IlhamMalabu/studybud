import React from 'react';
import Dashboard from './Dashboard';
import Todo from './Todo/Todo';
import Pomodoro from './Pomodoro/Pomodoro';
import Footer from './Footer'

const styles = {
  bg: `bg-main h-screen relative `, 
  container: `flex bg-main`,
  contTodo: `flex-1 flex items-center justify-center`,
  cont: `flex-1 flex justify-center`,
}
function App() {
  return (
    <div className={styles.bg} >
      <Dashboard />
      <div className={styles.container}>
      <div  className={styles.contTodo}>
      <Todo/>
      </div>
      <div className={styles.cont}>
      <Pomodoro />
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
