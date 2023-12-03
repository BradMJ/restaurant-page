function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const homeImage = document.createElement('img');
    homeImage.src = '../images/platingFood.jpeg';
    homeImage.alt = 'Plated Food';

    home.appendChild(createParagraph('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id'));
    home.appendChild(homeImage);

    return home;
};

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.innerText = text;
    return paragraph;
};

function loadHome() {
    const main = document.querySelector('#main');
    main.innerText = '';
    main.appendChild(createHome());
};

export default loadHome;