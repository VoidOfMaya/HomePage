import { githubIcon } from "./icons/icons";

const container = document.querySelector('.card-container');
const addCard=(name, repository,livePreview , photo, info)=>{
    const card = document.createElement('div');
    const screenshot = document.createElement('img');
    const title = document.createElement('h2')
    const about = document.createElement('p');

    card.classList.add('card');
    card.style.position = "relative";
    card.style.display='grid';
    card.style.width = '320px';
    card.style.height = '450px';
    card.style.backgroundColor ='#fff7f8'
    card.style.borderRadius ='10px 10px 0px 0px'
    card.style.boxShadow='1px 10px 51px -36px  rgba(34, 24, 28)'

    screenshot.src = photo
    screenshot.sizes ="(max-width)"
    screenshot.style.width = '320px';
    screenshot.style.height= '200px';
    screenshot.style.borderRadius =' 10px 10px 0px 0px'

    title.innerHTML=name;
    title.style.justifySelf= 'center';
    title.style.position = 'absolute';
    title.style.transform='translateY(150px)';

    

    about.innerHTML=info;
    about.style.justifySelf="center";
    about.style.alignSelf="start";
    about.style.margin= '5px';
    about.style.fontSize = "24px";

    githubIcon.style.height = "30px";
    githubIcon.style.width = '30px';
    githubIcon.style.justifySelf= 'end';
    githubIcon.style.alignSelf ='end';
    githubIcon.style.marginRight = '15px';
    githubIcon.style.marginBottom = '15px';
    githubIcon.classList.add('link-icon')
    const githubClone = githubIcon.cloneNode(true);  
 

    //handeling interactive layout
    card.addEventListener('mouseover',()=>{
        card.classList.add('active');
    })
    card.addEventListener('mouseout',()=>{
        card.classList.remove('active');
    })
    screenshot.addEventListener('mouseover',()=>{
        screenshot.style.cursor= 'pointer';
    })
    screenshot.addEventListener('click',()=>{
        window.open(livePreview);
    })
    githubClone.addEventListener('click',()=>{
        window.open(repository);
    })
  


     
    card.appendChild(screenshot);
    card.appendChild(title);
    card.appendChild(about);
    card.appendChild(githubClone);
    container.appendChild(card);
}

export{
    addCard,
}