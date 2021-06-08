import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Início");
    }

    async getHtml() {
        return `
            <div id="principal">
				<div class="efeito">
					<div class="container">
						<h1>Seja bem vindo ao Curriculum Generator Project!</h1>
						<p>
	                		Criar o seu currículo nunca foi tão fácil. Você só precisa preencher o formulário com os seus dados, escolher um dos nossos templates e terá o seu novo currículo em mãos.
	            		</p>
	           			<br><br>
	           			<h1>Como funciona?</h1>
	           			
	           			<p>
	                		Os seus dados servem de entrada no template escolhido como um documento LaTeX. Eles são enviados em conjunto para a API do servidor TexLive.net que irá gerar o seu currículo personalizado no formato pdf.
			            </p>
			            <br>
				        <h1>E quanto custa?</h1>

			            <p>
			                Nada! Todos os nossos templates, no momento, são grátis. No futuro teremos uma versão premium do site que contará com conteúdo exclusivo!
			            </p>
			            <br>

			            <table style="width:100%">
			            <tr>            
			            <td> 
		            
		            <form action="/cadastro">
		                <input type="submit" value="Crie já seu currículo!" />
		            </form>
		            </tr></td></table>

					</div>
				</div>
			</div>
        `;
    }
}