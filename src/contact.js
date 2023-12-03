function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    
    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('phone-number');
    phoneNumber.innerText = '📞 012-345-6789';

    const address = document.createElement('p');
    address.classList.add('address');
    address.innerText = '🏠 82V9+HGV, Neiafu, Tonga';

    const restaurantLocation = document.createElement('img');
    restaurantLocation.classList.add('location-image');
    restaurantLocation.src = '../images/restaurantLocation.png';
    restaurantLocation.alt = 'The Kraken Restaurant Location';

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);

    return contact;
};

function loadContact() {
    const main = document.querySelector('#main');
    main.innerText = '';
    main.appendChild(createContact());
};

export default loadContact;