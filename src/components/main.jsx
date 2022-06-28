import React from 'react';

var CircleButton = ({inside, value, setRating}) => {
    return (<div onClick={()=>setRating(value)} className="cbutton">
        <p>{inside}</p></div>);
}


export default CircleButton;