import React from 'react';

const Actor = (props) => {
    return (
        <>


        <h2>I am {props.actorName}</h2>
        <p>{props.children}</p>
            
        </>
    );
};

export default Actor;