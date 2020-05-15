import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';

import SingleTransaction from './../SingleTransaction/SingleTransaction';

function Transaction() {

    const { transactions } = useContext(GlobalContext);

    return (
        <div className="transaction">            
            <ul>
                {transactions.map(transaction => (
                    <SingleTransaction key={transaction.id} transaction={transaction}/>
                ))}                                
            </ul>
        </div>
    )
}

export default Transaction
