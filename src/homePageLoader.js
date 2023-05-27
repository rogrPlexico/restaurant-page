import quackster from './quackster.png';

export default function loadHomePage() {
    const div = document.createElement('div');
    div.id = ('content');
        
    const img = document.createElement('img');
    img.src = "./quackster.png";
    img.alt = "Quackstaurant mascot, Quackster";
    img.style="width:75px;height:100px";
    img.src = quackster;
    div.appendChild(img);

    const h1 = document.createElement('h1');
    h1.textContent =  "Get Ready For The Dining Experience Of A Lifetime";
    div.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = "Discover the finest anatine culinary delights in an inviting violently bright orange atmosphere. Our restaurant offers an exceptional dining experience that tantalizes your tastebuds and comes as close as physically possible to satisfying your insatiable appetite for duck.";
    div.appendChild(p);

    return div;
}