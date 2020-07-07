import React from 'react' ;
import FormDetails from './formDetails';
import FormPersonalDetails from './formPersonalDetails' ;
import FormContinue from './continue'
import FormSuccess from './success'

const UserForm = (props) => {
    const [state, setState] = React.useState({
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    })

    const nextStep = () => {
        setState((prevState) => (
            {...state, step: prevState.step + 1}     
            )
        )
    }

    const prevStep = () => {
        setState((prevState) => ({...state, step: prevState.step - 1}))
    }

    const handleChange = input => e => {
        setState({...state, [input]: e.target.value})
    }

    const { step } = state ;
    const { firstname, lastname, email, occupation, city, bio } = state ;
    const values = { firstname, lastname, email, occupation, city, bio } ;

    switch (step) {
        case 1:
            return <FormDetails
                values = {values}
                handleChange = {handleChange}
                nextStep = {nextStep}
             />
            break;
        case 2:
            return <FormPersonalDetails 
                values = {values}
                handleChange = {handleChange}
                prevStep = {prevStep}
                nextStep = {nextStep}
            />
            break;
        case 3: 
            return <FormContinue 
                prevStep = {prevStep}
                nextStep = {nextStep}
            />
            break;
        case 4:
            return <FormSuccess />
            break
        default:
            break;
    }
}

export default UserForm ;