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
            <h2>Resumo Financeiro</h2>
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


// const FilterTransactions = ({filter, setFilter})=>{

//     function filterThis(event){
//         setFilter(event.target.value);
//         event.target.classList.remove("grey-btn")
//     }

//     return (
//         <div className="filter-div">
//             <h2>Resumo Financeiro</h2>
//             <nav className="filters">
//                 <button className="default-btn" value="all" onClick={filterThis}>Todos</button>
//                 <button className="default-btn grey-btn" value="entrada" onClick={filterThis}>Entradas</button>
//                 <button className="default-btn grey-btn" value="saida" onClick={filterThis}>Despesas</button>
//             </nav>
//         </div>
        
//     )

// }
