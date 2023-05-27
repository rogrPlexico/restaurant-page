export default function loadMenu() {
    const title = document.querySelector('title');
    title.textContent = "Menu";
    
    const div = document.createElement('div');
    div.id = "content";
    
    const h1 = document.createElement('h1');
    h1.textContent =  "Our Menu";
    div.appendChild(h1);

    const ul = document.createElement('ul');

    // Menu Item 1
    const li1 = document.createElement('li');
    const p1 = document.createElement('p');
    li1.textContent = "Foie Gras à la Quackenbush";
    p1.textContent = "Decadent duck liver pâté served with truffle-infused quackers.";
    li1.appendChild(p1);
    ul.appendChild(li1);

    // Menu Item 2
    const li2 = document.createElement('li');
    const p2 = document.createElement('p');
    li2.textContent = "Quacktastic Cordon Bleu";
    p2.textContent = "Tender duck breast stuffed with gourmet cheese and prosciutto, served with a side of quackamole.";
    li2.appendChild(p2);
    ul.appendChild(li2);

    // Menu Item 3
    const li3 = document.createElement('li');
    const p3 = document.createElement('p');
    li3.textContent = "The Ducky Delight";
    p3.textContent = "A divine confit of duck leg glazed in a rich maple syrup reduction, accompanied by a quackling crisp.";
    li3.appendChild(p3);
    ul.appendChild(li3);

    // Menu Item 4
    const li4 = document.createElement('li');
    const p4 = document.createElement('p');
    li4.textContent = "Quackers Royale";
    p4.textContent = "A sophisticated canapé featuring smoked duck, caviar, and champagne-infused quackers.";
    li4.appendChild(p4);
    ul.appendChild(li4);

    // Menu Item 5
    const li5 = document.createElement('li');
    const p5 = document.createElement('p');
    li5.textContent = "The Duck Frou Frou";
    p5.textContent = "A playful salad with delicate duck confit, candied walnuts, and a zesty citrus quacktail dressing.";
    li5.appendChild(p5);
    ul.appendChild(li5);

    // Menu Item 6
    const li6 = document.createElement('li');
    const p6 = document.createElement('p');
    li6.textContent = "Quacktruffles";
    p6.textContent = "Exquisite chocolate truffles infused with a hint of roasted duck fat, for the adventurous gourmand.";
    li6.appendChild(p6);
    ul.appendChild(li6);

    // Menu Item 7
    const li7 = document.createElement('li');
    const p7 = document.createElement('p');
    li7.textContent = "Duck à l'Orange Extravaganza";
    p7.textContent = "A classic dish reinvented with a twist, featuring orange-glazed duck breast atop a bed of quack-scented risotto.";
    li7.appendChild(p7);
    ul.appendChild(li7);

    // Menu Item 8
    const li8 = document.createElement('li');
    const p8 = document.createElement('p');
    li8.textContent = "Quackamole Tower";
    p8.textContent = "A whimsical guacamole dip with shredded duck, jalapeños, and a splash of lime, served with golden quack tortilla chips.";
    li8.appendChild(p8);
    ul.appendChild(li8);

    // Menu Item 9
    const li9 = document.createElement('li');
    const p9 = document.createElement('p');
    li9.textContent = "The Dandiest Duck Croissant";
    p9.textContent = "A buttery croissant filled with succulent shredded duck, cranberry compote, and a touch of brie.";
    li9.appendChild(p9);
    ul.appendChild(li9);

    // Menu Item 10
    const li10 = document.createElement('li');
    const p10 = document.createElement('p');
    li10.textContent = "Quackaroni Gratin";
    p10.textContent = "Macaroni baked to perfection in a creamy cheese sauce, topped with breadcrumbs and crispy confit duck.";
    li10.appendChild(p10);
    ul.appendChild(li10);

    // Menu Item 11
    const li11 = document.createElement('li');
    const p11 = document.createElement('p');
    li11.textContent = "The Quackers Rockefeller";
    p11.textContent = "Plump oysters topped with a tantalizing blend of crispy duck cracklings, spinach, and a secret quacktail sauce.";
    li11.appendChild(p11);
    ul.appendChild(li11);

    // Menu Item 12
    const li12 = document.createElement('li');
    const p12 = document.createElement('p');
    li12.textContent = "Peking Duck-a-Boo";
    p12.textContent = "A theatrical presentation of crispy Peking duck, expertly carved tableside and served with handmade pancakes and savory hoisin sauce.";
    li12.appendChild(p12);
    ul.appendChild(li12);

    // Menu Item 13
    const li13 = document.createElement('li');
    const p13 = document.createElement('p');
    li13.textContent = "The Quackenberry Parfait";
    p13.textContent = "A layered dessert of velvety vanilla custard, mixed berries, and crunchy duck-shaped meringues.";
    li13.appendChild(p13);
    ul.appendChild(li13);

    // Menu Item 14
    const li14 = document.createElement('li');
    const p14 = document.createElement('p');
    li14.textContent = "Duck à la Crème Brûlée";
    p14.textContent = "A twist on the classic dessert, featuring a rich and creamy duck-flavored custard with a caramelized sugar crust.";
    li14.appendChild(p14);
    ul.appendChild(li14);

    // Menu Item 15
    const li15 = document.createElement('li');
    const p15 = document.createElement('p');
    li15.textContent = "Quackberry Cheesecake Delight";
    p15.textContent = "Creamy cheesecake swirled with tangy quackberry sauce, garnished with white chocolate ducklings.";
    li15.appendChild(p15);
    ul.appendChild(li15);

    div.appendChild(ul);

    return div;
}