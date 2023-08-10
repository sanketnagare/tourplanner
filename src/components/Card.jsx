import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card({ course, likedCourses, setLikedCourses }) {
    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            //already liked so remove it
            setLikedCourses((prev) => prev.filter(cid => (cid !== course.id)))
            toast.warning('Like Removed');
        }
        else {
            //not liked then like and insert
            if (likedCourses.length === 0) {
                setLikedCourses(course.id);
            }
            else {
                //not empty
                setLikedCourses((prev) => [...prev, course.id])
            }
            toast.success('Liked Successfully')
        }
    }
    return (
        <div className='onecard'>
            <div className='imagcont'>
                <img className='imag' src={course.image.url} alt="" />
                <button className='like' onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ?
                            (<FcLike />) :
                            (<FcLikePlaceholder />)
                    }
                </button>
            </div>

            <div className='info'>
                <p className='title'>{course.title}</p>
                <p className='desc'>{
                    course.description.length > 150 ? (course.description.substr(0, 100)) + "..." : (course.description)
                }</p>
            </div>
        </div>
    )
}

export default Card;