const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os Segredos da Mente Milionária',
                author: 'T. Harv Eker',
            },
            {
                title: 'O Homem Mais Rico da Babilônia',
                author: 'George Samuel Clason',
            },
            {
                title: 'Pai Rico, Pai Pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter',
            },
            {
                title: 'A Ciência de Ficar Rico',
                author: 'Wallace D. Wattles',
            },
            {
                title: 'Casais Inteligentes Enriquecem Juntos',
                author: 'Gustavo Cerbasi',
            },
            {
                title: 'Me Poupe!: 10 passos para nunca mais faltar dinheiro no seu bolso',
                author: 'Nathalia Arcuri',
            },
            {
                title: 'Sonho Grande',
                author: 'Cristiane Correa',
            },
            {
                title: 'O Poder da Educação Financeira',
                author: 'Robert T. Kiyosaki',
            },
            {
                title: 'Do mil ao milhão: Sem cortar o cafezinho',
                author: 'Thiago Nigro',
            },
            {
                title: 'Como Organizar sua Vida Financeira',
                author: 'Gustavo Cerbasi',
            },
            {
                title: 'A Riqueza da Vida Simples',
                author: 'Gustavo Cerbasi',
            },
            {
                title: 'O Poder do Hábito',
                author: 'Charles Duhigg',
            },
            {
                title: 'Dinheiro: Os segredos de quem tem',
                author: 'Gustavo Cerbasi',
            },
            {
                title: 'Pais Inteligentes Enriquecem seus Filhos',
                author: 'Gustavo Cerbasi',
            },
            {
                title: 'Pense e Enriqueça',
                author: 'Napoleon Hill',
            },
            {
                title: 'O Investidor Inteligente',
                author: 'Benjamin Graham',
            },
            {
                title: 'Trabalhe 4 Horas por Semana',
                author: 'Timothy Ferriss',
            },
            {
                title: 'Mais Esperto que o Diabo',
                author: 'Napoleon Hill',
            },
            {
                title: 'Iludido pelo acaso: a influência oculta da sorte nos mercados ...',
                author: 'Nassim Nicholas Taleb',
            },
            {
                title: 'A Lógica do Cisne Negro',
                author: 'Nassim Nicholas Taleb',
            },
            {
                title: 'Skin in the Game',
                author: 'Nassim Nicholas Taleb',
            },
            {
                title: 'O Leito de Procusto: Aforismos Filosóficos e Práticos',
                author: 'Nassim Nicholas Taleb',
            },
            {
                title: 'Antifrágil: Coisas que se Beneficiam com o Caos.',
                author: 'Nassim Nicholas Taleb',
            },
        ],
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é Insubstituível',
                author: 'Augusto Cury',
            },
            {
                title: 'Ansiedade – Como enfrentar o mal do século',
                author: 'Augusto Cury',
            },
            {
                title: 'Os Sete Hábitos das Pessoas Altamente Eficazes',
                author: 'Stephen R. Covey',
            },
        ],
    }
];

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) === -1) {
                authors.push(book.author);
            }
        }
    }
    console.log(`Autores: ${authors.length}`);
}


function getBooksFrom(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title);
            }
        }
    }
    console.log(`${author} escreveu: ${books.join(", ")}`);
}

const totalCategories = booksByCategory.length;
console.log(`Categorias: ${totalCategories}`);

for(let category of booksByCategory) {
    console.log(`Categoria ${category.category} -> ${category.books.length} livros.`);
}

countAuthors();
getBooksFrom("Thiago Nigro");
getBooksFrom("Napoleon Hill");