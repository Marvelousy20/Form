import React from 'react' ;
import Button from '@material-ui/core/Button';


const confirm = ({nextStep, prevStep}) => {
    const styles = {
        button: {
            marginTop: '5px',
            marginRight: '5px'
        }
    }

    return(
        <div style ={{display: 'flex', flexDirection: 'column', height: '80vh', justifyContent: 'center', alignItems: 'center'}}>
            <h3>Are you sure you want to submit??</h3>
            <Button
                variant="contained"
                color="primary" onClick = {prevStep} style = {styles.button} >
                Previous
            </Button>

            <Button
                variant="contained"
                color="primary" onClick = {nextStep} style = {styles.button} >
                Confirm
            </Button>
        </div>
    )
}

export default confirm