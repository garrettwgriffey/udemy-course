import React from 'react';

const person = (props) => {

    return (
        <div>
    <p>I am {props.name} and i am {props.age} years old!</p>
    <p>{props.children}</p>
    <p> My favorite food is {props.food} with {props.food2}</p>
    </div>
    )
}

export default person;