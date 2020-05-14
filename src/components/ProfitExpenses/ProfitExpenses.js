import React from 'react'

function ProfitExpenses() {
    return (
        <div>
            <div className="pro-exp-cotainer">
                <div>
                    <h4>Receitas</h4>
                    <p id="money-plus" className="money plus">+ R$ 0,00</p>
                </div>
                <div>
                    <h4>Despesas</h4>
                    <p id="money-minus" className="money minus">- R$ 0,00</p>
                </div>
            </div>
        </div>
    )
}

export default ProfitExpenses

