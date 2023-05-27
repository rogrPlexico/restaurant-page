export default function loadContactPage() {
    const title = document.querySelector('title');
    title.textContent = "Contact Page";
    
    const div = document.createElement('div');
    div.id = "content";
    
    const h1 = document.createElement('h1');
    h1.textContent =  "Contact Us";
    div.appendChild(h1);

    const h2 = document.createElement('h2');
    h2.textContent = "Ways to Contact Us:";
    div.appendChild(h2);

    const ul = document.createElement('ul');
    
    const phone = document.createElement('li');
    phone.innerHTML = "Phone:&nbsp; 782-257-8377";
    ul.appendChild(phone);

    const email = document.createElement('li');
    email.innerHTML = "Email:&nbsp; info@quackstaurant.com";
    ul.appendChild(email);

    const address = document.createElement('li');
    address.innerHTML = "Address:&nbsp; 444921015 Duck Street, Blundersville, New York";
    ul.appendChild(address);

    const socialMedia = document.createElement('li');
    socialMedia.textContent = "Social Media: ";
    socialMedia.classList.add('social');
    
    const ulSocial = document.createElement('ul');
    
    const twitter = document.createElement('li');
    twitter.textContent = "Twitter: ";
    const twitterLink = document.createElement('a');
    twitterLink.href = "https://twitter.com/quackstaurant";
    twitterLink.textContent = "@quackstaurant";
    twitter.appendChild(twitterLink);

    const instagram = document.createElement('li');
    instagram.textContent = "Instagram: ";
    const instagramLink = document.createElement('a');
    instagramLink.href = "https://instagram.com/quackstaurant";
    instagramLink.textContent = "@quackstaurant";
    instagram.appendChild(instagramLink);

    const facebook = document.createElement('li');
    facebook.textContent = "Facebook: ";
    const facebookLink = document.createElement('a');
    facebookLink.href = "https://facebook.com/quackstaurant";
    facebookLink.textContent = "Quackstaurant";
    facebook.appendChild(facebookLink);
    
    ulSocial.appendChild(twitter);
    ulSocial.appendChild(instagram);
    ulSocial.appendChild(facebook);
    socialMedia.appendChild(ulSocial);
    
    socialMedia.appendChild(ulSocial);

    ul.appendChild(socialMedia)

    div.appendChild(ul);

    return div;
 
}