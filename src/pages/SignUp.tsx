import { Text, TextInput, View } from "react-native";
import React, { useReducer, useState } from "react";
import { CustomInput } from "../components/CustomInput";

type FormState = {
    firstName: string;
    firstNameError: string | null;

    lastName: string;
    lastNameError: string | null;

    address: string;
    addressError: string | null;
}

type FormFieldSetAction = {
    formFieldName: string;
    formFieldValue: string;
}

function validate(formFieldValue: string, field: string, state: FormState) {
    const firstNameError = formFieldValue.length === 0 ?
        `${field} cannot be empty` : formFieldValue.length < 5 ?
            `${field} must be at least 5 characters` :
            formFieldValue.length > 20 ? `${field} cannot be more than 20 characters` : null;
    return {
        ...state,
        [field]: formFieldValue,
        [`${field}Error`]: firstNameError,
    }
}
const formFieldSetReducer = (state: FormState, action: FormFieldSetAction): FormState => {
    switch (action.formFieldName) {

        case 'firstName': {
            // const firstName = action.formFieldValue;
            // const firstNameError = firstName.length === 0 ?
            //     'First name cannot be empty' : firstName.length < 5 ?
            //         'First name must be at least 5 characters' :
            //         firstName.length > 20 ? 'First name cannot be more than 20 characters' : null;
            // return {
            //     ...state,
            //     firstName,
            //     firstNameError,
            // }
            return validate(action.formFieldValue, 'firstName', state);
        }
        case 'lastName': {
            return validate(action.formFieldValue, 'lastName', state);
        }
        case 'address': {
            return validate(action.formFieldValue, 'address', state);
        }
        default: {
            return state;
        }
    }
};

export const SignUpForm = () => {

    // const [name, setName] = useState('');
    // const [nameError, setNameError] = useState('');

    const [state, dispatch] = useReducer<(state: FormState, action: FormFieldSetAction) => FormState>(
        formFieldSetReducer,
        {
            firstName: '',
            firstNameError: null,

            lastName: '',
            lastNameError: null,

            address: '',
            addressError: null,
        }
    );

    return (
        <View style={{marginVertical: 25, marginTop: 20}}>

            <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>Sign Up</Text>

            <CustomInput
                label={'First Name'}
                value={state.firstName}
                onValueChange={(val) => dispatch({formFieldName: 'firstName', formFieldValue: val})}
                error={state.firstNameError}
            />

            <CustomInput
                label={'Last Name'}
                value={state.lastName}
                onValueChange={(val) => dispatch({formFieldName: 'lastName', formFieldValue: val})}
                error={state.lastNameError}
            />

            <CustomInput
                label={'Address'}
                value={state.address}
                onValueChange={(val) => dispatch({formFieldName: 'address', formFieldValue: val})}
                error={state.addressError}
            />

        </View>
    );

};
