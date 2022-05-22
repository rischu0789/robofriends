import React from "react";

//* PLANNING STEP 3
//Card component.
// Write {name, email, id} , distructor like an agrument Line 6 is 
//another way to write the destructor. This is a cleaner way.
const Card = ({name, email, id}) => {
    //const {name, email, id} = props; //destructor can be written this way or
                                        // inside like an argument. Line 7
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;

/* PLANNING STEP 2
//Card component.
const Card = ({name, email, id}) => {
   const {name, email, id} = props; //destructor 
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${props.id}?200x200`} alt="robots" />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}
export default Card;
*/

/* PLANNING STEP 1
//Card component.
const Card = () => {
    return (
        <div>
            <img src="https://robohash.org/janedoe?200x200" alt="robots" />
            <div>
                <h2>Jane Doe</h2>
                <p>Jane.doe@gmail.com</p>
            </div>
        </div>
    );
}
export default Card;
*/