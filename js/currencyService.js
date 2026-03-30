let rates=document.querySelector('.exchange-rates')


export async function currenyApi() {
  const data = await fetch(
    "https://v6.exchangerate-api.com/v6/0bdab48841fd277c143565fd/latest/USD"
  );

  const response = await data.json();

  let rate = "<h3>exchange ratings</h3>";
  let list=Object.entries(response.conversion_rates) 
  let list2=list.slice(0,4)
  for(let i=0;i<=list2.length;i++){ 
    rate += `
      <div class="ratings">
        <h6>${list[i][0]}</h6>
        <h6>${list[i][1]}</h6>
        
      </div>
      <hr />
    `;
  }
    
    

  

  rates.innerHTML = rate;
}
currenyApi()