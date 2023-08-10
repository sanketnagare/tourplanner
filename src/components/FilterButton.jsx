import React from 'react';

function FilterButton({ id, title, category, setCategory }) {
    function filterHandler(title) {
        setCategory(title);
    }
    return (
        <button className="filterbtn" key={id} onClick={() => filterHandler(title)}>
            {title}
        </button>
    )
}

export default FilterButton;