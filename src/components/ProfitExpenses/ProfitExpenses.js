import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

function ProfitExpenses() {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc+=item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc,item) => (acc+=item), 0)*-1).toFixed(2);

    return (
        <div>
            <div className="proex">
                <div className="proex-value">
                    <p>Receitas</p>
                    <h4 className="money plus">+ R$ {income}</h4>
                </div>
                <div className="proex-value"> 
                    <p>Despesas</p>
                    <h4 className="money minus">- R$ {expense}</h4>
                </div>
            </div>
        </div>
    )
}

export default ProfitExpenses

