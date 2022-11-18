import './style.css'

const FilterTransactions = ({filter, setFilter})=>{

    return (
        <div className="filter-div">
            <h2>Resumo Finanaceiro</h2>
            <nav className="filters">
                <button className="default-btn" value="all" onClick={(e)=>setFilter(e.target.value)}>Todos</button>
                <button className="default-btn grey-btn" value="entrada" onClick={(e)=>setFilter(e.target.value)}>Entradas</button>
                <button className="default-btn grey-btn" value="saida" onClick={(e)=>setFilter(e.target.value)}>Despesas</button>
            </nav>
        </div>
        
    )

}

export default FilterTransactions