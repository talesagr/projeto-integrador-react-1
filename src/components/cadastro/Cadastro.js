import './cadastro.css'

function Cadastro() {
    return (
        <main>
        <div id="idcadastro" class="container">
          <div class="title">Cadastro</div>
            <form action="#">
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">Nome</span>
                        <input type="text" placeholder="Nome Completo" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Contato</span>
                        <input type="number" placeholder="Telefone" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Cartão ID</span>
                        <input type="number" placeholder="ERFID" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Apartamento</span>
                        <input type="text" placeholder="Nº do Apartamento" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">CPF</span>
                        <input type="number" placeholder="CPF" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Nascimento</span>
                        <input type="date" placeholder="Data de Nascimento" required/>
                    </div>
                </div>
            </form>
                <div class="botoes">
                    <div class="btncancelar">
                        <button id="cancelar" type="reset">CANCELAR</button>
                    </div>
                    <div class="btnsalvar">
                        <button id="salvar" type="submit">SALVAR</button>
                    </div>
                </div>
            </div>
    </main>

    )
}

export default Cadastro