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
        cardLeft.appendChild('autor', 'card__left');

        const linkTitulo = document.createElement('a');
        cardLeft.appendChild('linkTitulo', 'card__left');

        const newsConteudo = document.createElement('p');
        cardLeft.appendChild('newsConteudo', 'card__left');

        const newsImagem = document.createElement('img');
        cardLeft.appendChild('newsImagem', 'card__left');

        const cardRight = document.createElement('div');
        cardLeft.setAttribute('class','card__right');

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        //estilizar nossos componentes
    }
}

customElements.define('card-news', Cardnews);
