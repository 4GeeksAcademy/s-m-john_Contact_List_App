import React, { useContext } from 'react';

import { Context } from '../context/Provider.jsx'

import { contactListActions } from '../contact/actions/contactListActions.js'

export default function ContactListPage() {

    const { state, dispatch } = useContext(Context);

    return (
        <div>
            <h1>Contact List Page</h1>

            <button onClick={() => dispatch({ type: 'ADD_CONTACT '})}>Add test contact</button>

            {state.contacts.map((contact) => {
                <div>
                    <p>(contact.name)</p>
                </div>
            ))}

        </div>
    )
}

