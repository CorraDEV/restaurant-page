import homepage_img from "./img/homepage.jpg";

export default function createHomepage(){
    const content = document.querySelector('#content');
    content.innerHTML = "";
    const h1 = document.createElement('h1');
    h1.textContent = 'Restaurant Page';
    const img = document.createElement('img');
    img.src = homepage_img;
    const p = document.createElement('p');
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia";    
    content.append(h1, img, p);
}