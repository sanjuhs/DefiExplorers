import React, { useState } from 'react'
import Compound from './learning/Compound';
import Home from './learning/Home';
import Uniswap from './learning/Uniswap';

function Learning({ closeLearningHandler }) {

    const [pageController, changePageController] = useState('home');

    const changePage = (page) => {
        console.log(page);
        changePageController(page);
    }

    return (
        <div className='flex flex-col z-30 w-2/4 h-3/4 p-4 absolute top-4 left-4 bg-white border-black rounded-xl'>
            <div onClick={closeLearningHandler} className='flex flex-row justify-end text-2xl cursor-pointer mx-1 my-1'>x</div>
            {(() => {
                switch (pageController) {
                    case 'home':
                        return <Home changePageHandler={changePage}/>
                    case 'uniswap':
                        return <Uniswap changePageController={changePage}/>
                    case 'aave':
                        return <Uniswap changePageController={changePage}/>
                    case 'compound':
                        return <Compound changePageController={changePage}/>
                    default:
                        return <Home /> 
        }
            })()}


        </div>
    )
}

export default Learning