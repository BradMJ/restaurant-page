function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('p');
    restaurantName.classList.add('restaurant-name');
    restaurantName.innerText = 'The Kraken';

    header.appendChild(restaurantName);

    return header;
};

function createNav() {
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.innerText = 'Home';

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.innerText = 'Menu';

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.innerText = 'Contact';

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
};

function createMain() {
    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    main.classList.add('main');
    return main;
};

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.innerText = `Copyright © ${new Date().getFullYear()} BradMJ`;

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/BradMJ';
    
    footer.appendChild(copyright);
    footer.appendChild(githubLink);

    return footer;
};

function initializeWebsite() {
    const content = document.querySelector('#content');

    content.appendChild(createHeader());
    content.appendChild(createNav());
    content.appendChild(createMain());
    content.appendChild(createFooter());
};

export default initializeWebsite;