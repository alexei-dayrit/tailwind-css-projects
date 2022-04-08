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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-yellow-600" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="yellow" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </>
    )
  }
}
