function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const homeImage = document.createElement('img');
    homeImage.classList.add('home-img');
    homeImage.src = '../images/homeImg.jpeg';
    homeImage.alt = 'Plated Food';

    home.appendChild(homeImage);
    home.appendChild(createParagraph('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'));

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