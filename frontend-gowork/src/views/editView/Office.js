import React from 'react'

function Office() {
    return (
    <div>
        <div>
            <h2>Escritório</h2>
        </div>

        <div>
            <form>
                <label>Nome do Escritório:<br/>
                <input type="text" /></label>
                <br/><br/>

                <label>Bairro:<br/>
                <input type="text" /></label>
                <br/><br/>

                <label>Capacidade de lugares:<br/>
                <input type="text" /></label>
                <br/><br/>

                <label>Endereço:<br/>
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

export default Office
