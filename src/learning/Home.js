import React from 'react'

function Home({ changePageHandler }) {
  return (
    <div>

      <h1 className='text-2xl font-bold mb-4'>Learning Defi</h1>
      <hr />
      <div className='grid grid-cols-1 mt-8 gap-4'>
        <div onClick={() => changePageHandler('wallets')}
          className='cursor-pointer rounded-xl px-4 py-4 bg-gray-100 flex flex-col items-center'>
          <h2 className='font-bold text-base'>Wallets</h2>
        </div>
        <div onClick={() => changePageHandler('polygon')}
          className='cursor-pointer rounded-xl px-4 py-4 bg-gray-100 flex flex-col items-center'>
          <h2 className='font-bold text-base'>Polygon</h2>
        </div>
        <div onClick={() => changePageHandler('uniswap')}
          className='cursor-pointer rounded-xl px-4 py-4 bg-gray-100 flex flex-col items-center'>
          <h2 className='font-bold text-base'>Uniswap</h2>
        </div>
        <div onClick={() => changePageHandler('aave')}
          className='cursor-pointer rounded-xl px-4 py-4 bg-gray-100 flex flex-col items-center'>
          <h2 className='font-bold text-base'>Aave</h2>
        </div>
        <div onClick={() => changePageHandler('compound')}
          className='cursor-pointer rounded-xl px-4 py-4 bg-gray-100 flex flex-col items-center'>
          <h2 className='font-bold text-base'>Compound</h2>
        </div>



      </div>
    </div>
  )
}

export default Home