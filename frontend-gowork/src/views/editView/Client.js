import React from 'react'

function Client(props) {
    
    return (
        <div>
            <div>
                <h2>Clientes</h2>
            </div>

            <div>
                <form>
                    <label>Nome:<br/>
                    <input type="text" /></label>
                    <br/><br/>
                    
                    <label>Nome:<br/>
                    <input type="text" /></label>
                    <br/><br/>

                    <label>Nome:<br/>
                    <input type="text" /></label>
                    <br/><br/>

                    <label>Nome:<br/>
                    <input type="text" /></label>
                    <br/><br/>

                    <label>Nome:<br/>
                    <input type="text" /></label>
                    <br/><br/>

                    <label>Nome:<br/>
                    <input type="text" /></label>
                    <br/><br/>

                    <br/>
                    <button>Salvar</button>
                    <button onClick={() => props.history.push('/app')}>Cancelar</button>
                </form>
            </div>
        </div>
    )
}

export default Client
