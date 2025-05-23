const url="https://dummyjson.com/posts";
async function getUrl(url){
    
    const response=await fetch(url);
    const data =await response.json();
    
    let tab=[...data.posts];
    const posts=[];
    const titles=[];
    const bodies=[];
   
    for(let i=0;i<=tab.length-1;i++){

        titles.push(tab[i].title);
        bodies.push(tab[i].body);
        
        posts.push({
            title:titles[i],
            body:bodies[i],
        })
        //document.writeln(posts[i].title);
    }
     return posts;
    //document.writeln(posts[i]);
}
getUrl(url);
const table=await getUrl(url);
//console.log(table);

function filterSearch(){
        const input = document.getElementById("input"); 
        input.addEventListener("input",(event)=>{
             const filter=table.filter((post)=>post.title.includes(event.target.value) || post.body.includes(event.target.value) );
             
             display(filter);
             
        })
       
        
           
}
filterSearch();

function display(filter){
    const ul= document.getElementById("list-post");
    ul.innerHTML='';
    console.log(filter[0].title);
    
    filter.forEach(post => {
        const div = document.createElement("div");
        div.className="div-List";
        div.innerHTML=`<p>${post.title}</p>
                    <p>${post.body}</p>`
                    ul.appendChild(div); //div =>variable
    });
    
    
}
