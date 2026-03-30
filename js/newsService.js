// <<<<<<< HEAD
// let politcs=document.querySelector(".politics")
// =======
let politcs=document.querySelector(".policts-cards")
// >>>>>>> 38593c8 (all feature done)

export async function newsApi(){
  const data = await fetch(
    "https://gnews.io/api/v4/search?q=General&apikey=c182722ca3c40a01dc7cf27b64cfd033"
  );

  const response = await data.json();
// <<<<<<< HEAD
  let cards=`<h2>politics</h2>
  <hr class="line" />`
// =======
//   let cards=` `
// >>>>>>> 38593c8 (all feature done)
  let general=response.articles.slice(0,4)
for(let i=0;i<general.length;i++){
          cards+=`
  
      <div class="cards">
        <div class="card">
          <img
            src="${general[i].image}"
            alt=""
            width="90px"
            height="60px"
          />
          <div class="h-p">
            <h5>${general[i].title}</h5>
            <p>
              ${general[i].description}
            </p>
          </div>
        </div>
      
      </div>
  `
}
politcs.innerHTML=cards;
    
  }
newsApi()

