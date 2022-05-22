import React from 'react';

// Every props have Children
const Scroll = (props) => {
// the double { {} } means the outter {} is telling this is JavaScript, inner {} it's an object in JS. This use object as style
    return (
        <div style={{overflowY: 'scroll', border: '1px solid lightblue', height: '800px'}}>
            {props.children}
        </div>
    )
};



export default Scroll;