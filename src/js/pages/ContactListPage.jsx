import React, { useContext } from 'react';

import { Context } from '../context/Provider.jsx'

import

export default function ContactListPage() {

    const { state, dispatch } = useContext(Context);

    return (
        <div>
            <h1>Contact List Page</h1>

            <button onClick={() => dispatch({ type: 'ADD_CONTACT '})}>Add test contact</button>

            {state.contacts.map((contact) => {
                <div>
                    <p>{Context.maps}</p>
                </div>
            ))}

        </div>
    )
}

