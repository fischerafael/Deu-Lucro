import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

function SingleTransaction({ transaction }) {

    const { handleDeleteTransaction } = useContext(GlobalContext);

    return (
        <li>
            <p>{transaction.text}</p>
            <h4> R$ {transaction.amount},00</h4>
            <button onClick={() => handleDeleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

export default SingleTransaction
