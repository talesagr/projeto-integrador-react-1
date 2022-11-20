import './moradores.css'

function Moradores() {
    return (
<main>
        <div id="idmoradores" class="container">
          <div class="title">MORADORES</div>
          <table>
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>Cartão ID</td>
                    <td>Apartamento</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>José da Silva</td>
                    <td>123456789</td>
                    <td>301</td>
                </tr>
                <tr>
                    <td>Ricardo Pereira</td>
                    <td>321654987</td>
                    <td>302</td>
                </tr>
                <tr>
                    <td>Isadora Mello</td>
                    <td>321654987</td>
                    <td>302</td>
                </tr>
                <tr>
                    <td>Sif Valhalla</td>
                    <td>3577536</td>
                    <td>102</td>
                </tr>
                <tr>
                    <td>Neymar Junior</td>
                    <td>10101547</td>
                    <td>202</td>
                </tr>
            </tbody>
        </table>    
        <div class="divbotoes">
            <button id="excluir">EXCLUIR</button>
            <button id="editar">EDITAR</button>
            <button id="nvcadastro">NOVO CADASTRO</button>
        </div>
        <div class="divfiltro">Filtrar por:
            <label>Data:
                <input id="filtro" type="date"/>
            </label>
            <label>Apartamento
                <input id="filtro" type="number"/>
            </label>
        </div>
    </div>
    </main>

)
}

export default Moradores
