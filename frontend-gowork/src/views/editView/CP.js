import React from 'react'

function CP() {
    return (
    <div>
        <div>
            <h2>Planos de Coworking</h2>
        </div>

        <div>
            <form>
                <label>Nome do Plano:<br/>
                <input type="text" /></label>
                <br/><br/>

                <label>Valor:<br/>
                <input type="text" /></label>
                <br/><br/>
                
                <br/>
                <button>Salvar</button>
                <button>Cancelar</button>
            </form>
        </div>
    </div>
    )
}

export default CP
