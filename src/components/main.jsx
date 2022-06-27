import React from 'react';

var CircleButton = ({inside}) => {
    return (<div className="cbutton">
        {console.log("inside of circle button")}
        <p>{inside}</p></div>);
}


export default CircleButton;