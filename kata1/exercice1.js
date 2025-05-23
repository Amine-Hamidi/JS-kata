async function getCook(){
    const url="https://dummyjson.com/recipes";
    const response=await fetch(url);
    const data =await response.json();
    
    let tab=[...data.recipes];
   recipies=[]
   names=[];
   tags=[];
   images=[];
   difficulties=[];
   cookTimes=[];
    for(let i=0;i<=tab.length-1;i++){

        names.push(tab[i].name);
        tags.push(tab[i].tags);
        images.push(tab[i].image);
        difficulties.push(tab[i].difficulty);
        cookTimes.push(tab[i].cookTimeMinutes);

        recipies.push({
            name:tab[i].name,
            tags:tab[i].tags,
            image:tab[i].image,
            difficulty:tab[i].difficulty,
            cookTimeMinutes:tab[i].cookTimeMinutes,
        })
    }
    //console.log(recipies);
    
}
getCook();
async function display(){
    await getCook();
    const container =document.getElementById("container");
    for(let i=0;i<=recipies.length-1;i++){
        //console.log(names[i],tags[i],images[i],difficulties[i],cookTimes[i]);
        const div = document.createElement("div");
        div.className="div-List";
        div.innerHTML= `<h3>${names[i]}</h3>
                        <img src="${images[i]}">
                        <ul>
                            <li>${tags[i]}</li>
                        </ul>
                        <p>${difficulties[i]}</p>
                        <p>${cookTimes[i]} minutes</p>`;
         container.appendChild(div);
    }
   
}
display();