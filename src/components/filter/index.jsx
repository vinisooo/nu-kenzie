import './style.css'
import { useState } from 'react';

const FilterTransactions = ({filter, setFilter})=>{

    const buttons = [
        {
            text: "Todos",
            value: "all",
        },
        {
            text: "Entradas",
            value: "entrada",
        },
        {
            text: "Despesas",
            value: "saida",
        },
    ]

    return (
        <div className="filter-div">
            <h2 className='financial-summary-title'>Resumo Financeiro</h2>
            <nav className="filters">
                {
                    buttons.map((btn, index)=>{
                        return <button key={index} value={btn.value} onClick={e=>setFilter(e.target.value)} className={btn.value == filter ? "default-btn" : "default-btn grey-btn" }>
                            {btn.text}
                        </button>
                    })
                }

            </nav>
        </div>
        
    )

}

export default FilterTransactions
