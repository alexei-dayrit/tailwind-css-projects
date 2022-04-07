import React from 'react';

export default class App extends React.Component {
  render() {
    return(
      <>
      <h1 className='text-red-400 text-5xl flex justify-center items-center h-screen'>
        Hello Tailwind!
      </h1>
      <button className='bg-pink-300 border-solid border-2 border-red-300 p-4'>Click</button>
      </>
    )
  }
}
