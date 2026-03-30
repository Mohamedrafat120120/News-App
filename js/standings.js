document.addEventListener("DOMContentLoaded", () => {
  standingApi()
})

async function standingApi() {
  const tbody = document.querySelector(".tbody")


  try {
    const data = await fetch(
      "https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=207&APIkey=d8465030b91ec02972bf4c9fc213dd0f5e7cf9b665e1f1d3440ee6775b858146"
    )

    const response = await data.json()
    console.log(response)


    const rows = response.result.total

    let tr = ""
    for (let i = 0; i < rows.length; i++) {
      tr += `
        <tr>
          <td>${rows[i].standing_team}</td>
          
          <td>${rows[i].standing_P}</td>
          <td>${rows[i].standing_W}</td>
          <td>${rows[i].standing_D}</td>
          <td>${rows[i].standing_L}</td>
          <td>${rows[i].standing_F}</td>
          <td>${rows[i].standing_A}</td>
          <td>${rows[i].standing_GD}</td>
          <td>${rows[i].standing_PTS}</td>
          
        </tr>
      `
    }

    tbody.innerHTML = tr
  } catch (error) {
    console.error("Fetch failed:", error)
  }
}