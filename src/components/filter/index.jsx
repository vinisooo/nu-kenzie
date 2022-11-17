import './style.css'

const FilterTransactions = ()=>{

    return (
        <div className="filter-div">
            <h2>Resumo Finanaceiro</h2>
            <nav className="filters">
                <button className="default-btn">Todos</button>
                <button className="default-btn grey-btn">Entradas</button>
                <button className="default-btn grey-btn">Despesas</button>
            </nav>
        </div>
        
    )

}

export default FilterTransactions