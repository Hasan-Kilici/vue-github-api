let user;

document.addEventListener("click", (e)=>{
  let element = e.srcElement;
  let fn = element.getAttribute("hasankilici");
  eval(fn);
})

function github(){
  let name = document.getElementById("username-input").value;
  let main = document.getElementById("github-main");
  fetch(`https://api.github.com/users/${name}`).then(async (res)=>{
    user = await res.json();
    setTimeout(()=>{
      Component("#github-main",`
      <div class="profile" id="${user.node_id}">
         <img class="avatar" src="${user.avatar_url}">
         <h2 class="username">${user.name}</h2>
         <h3 class="url">${user.login}</h3>
         <div class="social">
             <span>${user.followers} Takipçi</span>
             <span>${user.following} Takip Edilen</span      
         </div>
      </div>
      `)
    },1000);
  });
}

function Component(query,innerHTML){
  let element = document.querySelector(query);
  element.innerHTML = innerHTML;
}
