import React from "react";
import Card from "./Card";


//PLANNING STEP 3
//Create a loop to loop through all robots in robots list
const CardList = ({robots}) => {
    return ( 
        <div>
            { //JS needs to be in a {}
                robots.map((user, index)  => { 
                    return (
                            <Card 
                            key={index} //key is a must have when using loop, like id, something that doesn't change
                                        //,so react know if one of the cards get deleted
                                         // make key = {i}
                            id={robots[index].id} 
                            name={robots[index].name} 
                            email={robots[index].email}
                            />
                    )
                    }
                )
            } 
        </div>
    );
}

/*PLANNING STEP 2
//Create a loop to loop through all robots in robots list
const CardList = ({robots}) => {
    const cardComponent = robots.map((user, index)  => { 
        // key is a must have when using loop, like id, something that doesn't change
        //,so react know if one of the cards get deleted
        // make key = {i}
            return (
                <Card 
                key={index} 
                id={robots[index].id} 
                name={robots[index].name} 
                email={robots[index].email}
                />
            )
        }
    )
    return ( 
        <div>
            {cardComponent} 
        </div>
    );
}
*/




//PLANNING STEP 1
//This retures the 1st 3 robots only
/*
const CardList = ({robots}) => {
    return (
        <div>
            <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
            <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
        </div>
    );
}
*/
export default CardList;