document.addEventListener("DOMContentLoaded", () => {
  statesApi()
})

async function statesApi() {
  const tbodyScores = document.querySelector(".tbody-scores")


  try {
    const data = await fetch(
      "https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=96&APIkey=d8465030b91ec02972bf4c9fc213dd0f5e7cf9b665e1f1d3440ee6775b858146"
    )

    const response = await data.json()
    console.log(response)



    const rows = response.result
    // const players=response.players

    let tr = ``
 rows.forEach(row => {
  tr+=`
     <tr>
          <td>${row.team_name}</td>
        
        </tr>`
        row.players.forEach(player => {
         tr+=`<tr>

         <td>${""}</td>
         <td>${player.player_name}</td>
         <td>${player.player_goals}</td>
          <td>${player.player_assists}</td>
          </tr>
          `
          

          
        });
  
 });
      
   
  
   

    tbodyScores.innerHTML = tr
  } catch (error) {
    console.error("Fetch failed:", error)
  }
}



document.addEventListener("DOMContentLoaded", () => {
  statesCardsApi()
})

async function statesCardsApi() {
  const tbodyCards = document.querySelector(".tbody-cards")
 

  try {
    const data = await fetch(
      "https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=96&APIkey=d8465030b91ec02972bf4c9fc213dd0f5e7cf9b665e1f1d3440ee6775b858146"
    )

    const response = await data.json()
    console.log(response)

  

    const rows = response.result
    // const players=response.players

    let tr = ``
 rows.forEach(row => {
  tr+=`
     <tr>
          <td>${row.team_name}</td>
        
        </tr>`
        row.players.forEach(player => {
         tr+=`<tr>

         <td>${""}</td>
         <td>${player.player_name}</td>
         <td>${player.player_yellow_cards}</td>
          <td>${player.player_red_cards}</td>
          </tr>
          `
          

          
        });
  
 });
     
    tbodyCards.innerHTML = tr
  } catch (error) {
    console.error("Fetch failed:", error)
  }
}