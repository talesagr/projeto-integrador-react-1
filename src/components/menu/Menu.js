import './menu.css'


function Menu() {
    return (
        
        <header>
            <label className="logo">LOG SECURITY</label>
    <ul>
        <a href="/cadastro/cadastro.js" id="cadastro">CADASTRO</a>
        <a href="/logs/logs.js" id="logs">LOGS</a>
        <a href="/moradores/moradores.js" id="moradores">MORADORES</a>
        <a href="/historico/historico.js" id="historico">HISTÓRICO</a>
    </ul>

    </header>
    )
}

export default Menu