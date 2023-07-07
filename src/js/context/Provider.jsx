import React, { createContext, useReducer } from 'react';

import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from '../context/actions/contactListActions.js'

export const Context = createContext();

const reducer = (state, action) => {
    
    switch (action,type) {

        case ADD_CONTACT: {

            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    action.data
                ]
            }
        }
    }
}

const initialState = {
    contacts: [
        {
            name: 'Elvis Hernandez'
            email: 'elvishernandezdev@gmail.com'
            phone: 'xxx-xxx-xxxx'
            address: 'test address'
        }
    ]
}

export default function Provider(props) {

    const (state, dispatch) = useReducer(reducer, initialState)

    return (
        <Context.Provider value={( state, sispatch)}>
            (props.children)
        </Context.Provider>
    )
}