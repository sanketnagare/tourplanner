import React from 'react';
// import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const TestoCard = ({ reviews, index, setIndex }) => {

    // function leftHandler() {
    //     if ((index - 1) < 0) {
    //         setIndex(reviews.length - 1);
    //     }
    //     else {
    //         setIndex(index - 1);
    //     }
    // }

    // function rightHandler() {
    //     if ((index + 1) >= reviews.length) {
    //         setIndex(0);
    //     }
    //     else {
    //         setIndex(index + 1)
    //     }

    // }

    // function surpriseHandler() {
    //     setIndex(Math.floor(Math.random() * reviews.length))

    // }
    return (
        <div className='card'>

            <div className='imgcont'>
                <img className='image' src={reviews.image} alt="" />
            </div>

            <div className='name'>
                <p>{reviews.name}</p>
            </div>

            <div className='job'>
                <p>{reviews.job}</p>
            </div>

            <div >
                <FaQuoteLeft className='leftquote'></FaQuoteLeft>
            </div>

            <div className='text'>
                {reviews.text}
            </div>

            <div >
                <FaQuoteRight className='rightquote'></FaQuoteRight>
            </div>
            {/* 
            <div className='LRbtn'>
                <button className='left' onClick={leftHandler}><BiSolidChevronLeft /></button>
                <button className='right' onClick={rightHandler}><BiSolidChevronRight /></button>
            </div>

            <div >
                <button className='surprisebtn' onClick={surpriseHandler}>Surprise me</button>
            </div> */}

        </div>
    )
}

export default TestoCard;