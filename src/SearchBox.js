import React from "react";

const SearchBox = ({searchfield, searchChange}) =>{ // use deconstructor in argument
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue" 
            type='search' 
            placeholder='search robots'
            onChange={searchChange} // onChange is a reserved word in HTML.
            />
        </div>
    )
}



export default SearchBox;