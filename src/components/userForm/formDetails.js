import React from 'react' ;
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

const formDetails = ({values, handleChange, nextStep}) => {
    const styles = {
        button: {
            marginTop: '5px',
        }
    }


    return(
        <React.Fragment>
            <form style ={{display: 'flex', flexDirection: 'column', height: '80vh', justifyContent: 'center', alignItems: 'center'}}>
                <TextField 
                    label= "firstname"
                    onChange = {handleChange('firstname')}
                    value = {values.firstname}
                /> 

                <br/>
                <TextField 
                    label= "lastname"
                    onChange = {handleChange('lastname')}
                    defaultValue = {values.lastname}
                /> <br/>
                <TextField 
                    label= "E-mail"
                    onChange = {handleChange('email')}
                    defaultValue = {values.email}
                />

                <br/>
                <Button
                    variant="contained"
                    color="primary" onClick = {nextStep} style = {styles.button} >
                        Continue
                </Button>
            </form>
        </React.Fragment>
    )
}

export default formDetails