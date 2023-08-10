import React from 'react';
import FilterButton from './FilterButton';


function Filter({ filterData, category, setCategory }) {
    return (
        <div className='filtertabs'>
            {
                filterData.map(item => (
                    <FilterButton category={category} setCategory={setCategory} key={item.id} title={item.title}></FilterButton>
                ))
            }
        </div>
    )
}

export default Filter;