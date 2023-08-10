import React, { useState } from 'react';
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi';
import TestoCard from './TestoCard';

const Testo = ({ reviews }) => {

    const [index, setIndex] = useState(0);

    function leftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1)
        }

    }

    function surpriseHandler() {
        setIndex(Math.floor(Math.random() * reviews.length));

    }
    return (
        <div className='main'>
            <div className="title">
                <div className='heading'>
                    <h1>Our Testimonials</h1>
                </div>

                <div className='line'></div>
            </div>

            <TestoCard reviews={reviews[index]} index={index} setIndex={setIndex}></TestoCard>

            <div className='LRbtn'>
                <button className='left' onClick={leftHandler}><BiSolidChevronLeft /></button>
                <button className='right' onClick={rightHandler}><BiSolidChevronRight /></button>
            </div>

            <div >
                <button className='surprisebtn' onClick={surpriseHandler}>Surprise me</button>
            </div>
        </div>
    )
}

export default Testo;