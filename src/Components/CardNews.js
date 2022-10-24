class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        //o que vai ser montando primeiro, para construir os elementos
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class','card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class','card__left');

        const autor = document.createElement('span');
        autor.textContent = 'By ' + (this.getAttribute('autor') || 'annoymous');
        cardLeft.appendChild('autor', 'card__left');

        const linkTitulo = document.createElement('a');
        linkTitulo.textContent = this.getAttribute('title');
        linkTitulo.href = this.getAttribute('link-url');
        cardLeft.appendChild('linkTitulo', 'card__left');

        const newsConteudo = document.createElement('p');
        newsConteudo.textContent = this.getAttribute('content');
        cardLeft.appendChild('newsConteudo', 'card__left');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitulo);
        cardLeft.appendChild(newsConteudo);



        const cardRight = document.createElement('div');
        cardLeft.setAttribute('class','card__right');

        const newsImagem = document.createElement('img');
        newsImagem.src = 'assets/images/asset-vader.png';
        newsImagem.alt = 'foto da noticia';
        cardLeft.appendChild('newsImagem', 'card__left');

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        //estilizar nossos componentes
        const style = document.createElement('style')
        style.textContent = `
            .card{
                width:80%;
                border: 1px solid black;
                box-shadow: 12px 6px 86px 23px rgba(0,0,0,0.67);
                -webkit-box-shadow: 12px 6px 86px 23px rgba(0,0,0,0.67);
                -moz-box-shadow: 12px 6px 86px 23px rgba(0,0,0,0.67);
                display: flex;
                flex-direction: row;
                justify-content:space-between;
            }
            
            .card__left, .card__right {
                border: 1px solid blue;
            }
            
            .card__left{
                display: flex;
                flex-direction: column;
                justify-content:center;
                padding-left:20px;
            }
            
            .card__left > h1 {
                margin-top: 18px;
                font-size: 26px;
            }
            
            .card__left > p {
                color: rgb(95, 95, 95);
            }
            
            .card__left > span {
                font-weight: 430;
            }
        `
        return style;
    }
}

customElements.define('card-news', Cardnews);
