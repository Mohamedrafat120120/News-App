export async function sportsApi() {
  const live = document.querySelector(".ls")
  // if (!tbody) {
  //   console.error("tbody not found")
  //   return
  // }

  try {
    const data = await fetch(
      "https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=d8465030b91ec02972bf4c9fc213dd0f5e7cf9b665e1f1d3440ee6775b858146"
    )

    const response = await data.json()

    const rows = response.result

    let tr = ``
    for (let i = 0; i < rows.length; i++) {
      tr += `
        

      <div class="league-name-logo">
      <h2>${rows[i].league_name}</h2>
       <img
               src="${rows[i].league_logo}"
               alt=""
               width="30px"
               height="30px"
             />


      </div>
      
              <div class="home-live">
               <div class="team-names">
                     <img
                       src="${rows[i].home_team_logo}"
                       alt=""
                       width="20px"
                       height="20px"
                     />
                     <h4>${rows[i].event_home_team}</h4>
                   </div>
                   <div class="teams-goals">${rows[i].event_final_result}</div>
                   <div class="team-names">
                     <img
                       src="${rows[i].away_team_logo}"
                       alt=""
                       width="20px"
                       height="20px"
                     />
                     <h4>${rows[i].event_away_team}</h4>
                     <hr>
                   </div>
                   </div>
                 
        
      `
    }

    live.innerHTML = tr
    
  } catch (error) {
    console.error("Fetch failed:", error)
  }
}
sportsApi()



export async function sportshomeApi() {
  const live = document.querySelector(".ls")
  // if (!tbody) {
  //   console.error("tbody not found")
  //   return
  // }

  try {
    const data = await fetch(
      "https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=d8465030b91ec02972bf4c9fc213dd0f5e7cf9b665e1f1d3440ee6775b858146"
    )

    const response = await data.json()

    const rows = response.result.slice(0, 4)

    let tr = ``
    for (let i = 0; i < rows.length; i++) {
      tr += `
        

              <div class="home-live">
               <div class="team-names">
                     <img
                       src="${rows[i].home_team_logo}"
                       alt=""
                       width="20px"
                       height="20px"
                     />
                     <h4>${rows[i].event_home_team}</h4>
                   </div>
                   <div class="teams-goals">${rows[i].event_final_result}</div>
                   <div class="team-names">
                     <img
                       src="${rows[i].away_team_logo}"
                       alt=""
                       width="20px"
                       height="20px"
                     />
                     <h4>${rows[i].event_away_team}</h4>
                     <hr>
                   </div>
                   </div>
                 
        
      `
    }

    live.innerHTML = tr
    
  } catch (error) {
    console.error("Fetch failed:", error)
  }
}
