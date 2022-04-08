import React from 'react';

const styles = {
  test: 'text-purple-400 text-[80px] border-solid border-4',
  center: 'flex justify-center items-center'
}

export default class App extends React.Component {
  render() {
    return(
      <>
        <h1 className='text-pink-400 flex text-[100px] justify-center items-center h-screen
                border-solid border-4 border-blue-100 bg-[#f8f9fa]'>
          Hello Tailwind!
        </h1>
        <p className={`${styles.test} ${styles.center} border-red-700`}>Hey</p>
        <h3 className={`${styles.center} text-primary`}>HELLO</h3>
        <h3 className={`${styles.center}`}>Howdy</h3>
        <h2 className={`${styles.center} test`}>hi</h2>
      </>
    )
  }
}
