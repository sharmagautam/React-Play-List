import React from 'react';

const functionClick = () => {
    
    const clickHandler = () =>{
        console.log('button clicked');
    }
    return(
        <div>
            {/* dont give paranthisis () after function call */}
            <button onClick = {clickHandler}> click to generate an event</button>
        </div>
    );
}

export default functionClick;