import React from 'react' ;


const success = ({values, handleChange, nextStep}) => {
    return(
        <div style ={{display: 'flex', flexDirection: 'column', height: '80vh', justifyContent: 'center', alignItems: 'center'}}>
            <h2>Thank you for submitting. Your responses have been recorded!</h2>
        </div>
    )
}

export default success