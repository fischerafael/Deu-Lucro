import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';

function Amount() {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc+=item), 0).toFixed(2);

    return (
        <div className="amount">
            <p>Saldo</p>
            <h1 id="balance">R$ {total}</h1>
        </div>
    )
}

export default Amount;