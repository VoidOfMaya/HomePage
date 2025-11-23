const container = document.querySelector('.card-container');
const addCard=(name, repository,livePreview, photo, info)=>{
    const card = document.createElement('div');
    const screenshot = document.createElement('img');
    const title = document.createElement('h2')
    const about = document.createElement('p');

    card.classList.add('card');


    card.style.width = '320px';
    card.style.height = '450px';
    card.style.backgroundColor ='#fff7f8'
    card.style.borderRadius ='20px'
    card.style.boxShadow='1px 10px 51px -36px  rgba(34, 24, 28)'

    screenshot.src= photo;
    screenshot.style.width = '320px';
    screenshot.style.height= '200px';
    screenshot.style.borderRadius =' 20px 20px 0px 0px'

    title.innerHTML=name;
    title.style.justifySelf= 'center';
    title.style.position = 'sticky';
    title.style.transform='translateY(-60px)';
    

    about.innerHTML=info;
    about.style.justifySelf="center";
    about.style.alignSelf="start";
    about.style.margin= '5px';
    about.style.fontSize = "24px";

    
    card.appendChild(screenshot);
    card.appendChild(title);
    card.appendChild(about);


    container.appendChild(card);

    //handeling interactive layout
    card.addEventListener('mouseover',()=>{
        card.classList.add('active');
    })
    card.addEventListener('mouseout',()=>{
        card.classList.remove('active');
    })

}

export{
    addCard,
}