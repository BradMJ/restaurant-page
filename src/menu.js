function createMenuItem(name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('h2');
    foodName.classList.add('food-name');
    foodName.innerText = name;

    const foodDescription = document.createElement('p');
    foodDescription.classList.add('food-description');
    foodDescription.innerText = description;

    const foodImage = document.createElement('img');
    foodImage.classList.add('food-image');
    foodImage.src = `../images/food/${name.toLowerCase()}.jpeg`;
    foodImage.alt = `${name}`;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
};

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createMenuItem(
            'Bruschetta',
            'Tomato, Onion and Basil'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Ota Ika',
            'Raw Fish and Chips'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Prawn Salad',
            'Green Papaya Prawns Salad'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Lobster and Salad',
            'Grilled Whole with Garlic Butter'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Fish and Chips',
            'Catch of the Day Fried with Chips'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Chicken Wings',
            'Tossed to Your Heat Preference'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Wahoo and Salad',
            'Cooked in a Cream Lime Butter'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Coffee Cheesecake',
            'Served with a Scoop of Ice Cream'
        )
    );
    
    return menu;
};

function loadMenu() {
    const main = document.querySelector('#main');
    main.innerText = '';
    main.appendChild(createMenu());
};

export default loadMenu;