import './style.css'

const FilterTransactions = ({filter, setFilter})=>{

    function filterThis(event){
        setFilter(event.target.value);
        event.target.classList.remove("grey-btn")
    }

    return (
        <div className="filter-div">
            <h2>Resumo Financeiro</h2>
            <nav className="filters">
                <button className="default-btn" value="all" onClick={filterThis}>Todos</button>
                <button className="default-btn grey-btn" value="entrada" onClick={filterThis}>Entradas</button>
                <button className="default-btn grey-btn" value="saida" onClick={filterThis}>Despesas</button>
            </nav>
        </div>
        
    )

}

export default FilterTransactions