import fetch from "node-fetch";

let data = {
  
};

function get(matches,year){
for (let i = 1; i <= 13; i++) {
  fetch(
    `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${i}`
    )
    .then((response) => response.json())
    .then((res) => {
      let teams = [];
      res.data.map((e) => {
        teams = [...teams, e.team1, e.team2];
      });
      
      return teams;
      
    })
    .then((res) => {
     res.map(e => {
      if(data[e]){
        
        data[e] += 1;
      } else {
        data[e] = 1
      }
    })

    console.log(data)
    for(const i in data){
    
      if(data[i]>=matches){
        console.log(i)
      }
    }
  

    });
   
}
}

get(9,2012)







