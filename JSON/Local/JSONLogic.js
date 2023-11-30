async function populate() {
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
    const request = new Request(requestURL);
    const response = await fetch(request);
    const superHeroes = await response.json();

    populateHeader(superHeroes);
    populateHeroes(superHeroes)
}

function populateHeader(obj) {
    const header = document.querySelector('header');
    const H1 = document.createElement('h1');
    H1.textContent = obj.squadName;
    header.appendChild(H1);

    const paragraph = document.createElement('p');
    paragraph.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(paragraph);
}

function populateHeroes(obj) {
    const section = document.querySelector('section');
    const heroes = obj.members; // an Array []
    
    for (const hero of heroes) {
        const Article = document.createElement('article');
        const H2 = document.createElement('h2'); // NAME
        const P1 = document.createElement('p'); // secret ID
        const P2 = document.createElement('p'); // age
        const P3 = document.createElement('p'); // superpowers
        const UL = document.createElement('ul'); // the list of superpowers

        H2.textContent = hero.name;
        P1.textContent = `Secret identity: ${hero.secretIdentity}`;
        P2.textContent = `Age: ${hero.age}`;
        P3.textContent = "Superpowers:"

        for (const power of hero.powers) {
            const listItem = document.createElement('li');
            listItem.textContent = power;
            UL.appendChild(listItem);
        }

        Article.appendChild(H2);
        Article.appendChild(P1);
        Article.appendChild(P2);
        Article.appendChild(P3);
        Article.appendChild(UL);

        section.appendChild(Article);
    }
}


populate();