import React from 'react' ;
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';


const formPersonalDetails = ({values, handleChange, nextStep, prevStep}) => {
    const styles = {
        button: {
            marginTop: '5px',
            marginRight: '5px'
        }
    }


    return(
        <React.Fragment>
            <form style ={{display: 'flex', flexDirection: 'column', height: '80vh', justifyContent: 'center', alignItems: 'center'}}>
                <TextField 
                    label= "Occupation"
                    onChange = {handleChange('occupation')}
                    value = {values.occupation}
                /> 

                <br/>
                <TextField 
                    label= "city"
                    onChange = {handleChange('city')}
                    defaultValue = {values.city}
                /> <br/>
                <TextField 
                    label= "bio"
                    onChange = {handleChange('bio')}
                    defaultValue = {values.bio}
                />

                <br/>
                <Button
                    variant="contained"
                    color="primary" onClick = {prevStep} style = {styles.button} >
                        Previous
                </Button>
                <Button
                    variant="contained"
                    color="primary" onClick = {nextStep} style = {styles.button} >
                        Continue
                </Button>
            </form>
        </React.Fragment>
    )
}

export default formPersonalDetails