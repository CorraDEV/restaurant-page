export default function createAbout(){
    const content = document.querySelector('#content');
    content.innerHTML = "";
    const h1 = document.createElement('h1');
    h1.textContent = 'About Page';    
    const p = document.createElement('p');
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia";    
    content.append(h1, p);
}