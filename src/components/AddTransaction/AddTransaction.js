import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

function AddTransaction() {

    const { handleAddTransaction } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
        
    const createNewTransaction = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000000),
            text,
            amount: +amount
        }

        handleAddTransaction(newTransaction);
        setAmount('');
        setText('');
    }

    return (        
        <div className="AddTransaction">
            <form onSubmit={createNewTransaction}>
                <input 
                    type="text" 
                    placeholder="Descrição"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Valor"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button type="submit">ADICIONAR</button>
            </form>
        </div>
    )
}

export default AddTransaction
