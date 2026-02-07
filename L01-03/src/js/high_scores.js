// ------------------------------------------------------------
// High Scores — Memory Match
// ------------------------------------------------------------

// Lab 03 - Part 3: Dynamic Content


//----3.A High Scores Data----

const scores = [
  { player: "Ava", moves: 22, time: 58, date: "2026-01-10" },
  { player: "Noah", moves: 24, time: 63, date: "2026-01-09" },
  { player: "Mia", moves: 26, time: 71, date: "2026-01-08" },
  { player: "Liam", moves: 27, time: 75, date: "2026-01-07" },
  { player: "Zoe", moves: 29, time: 82, date: "2026-01-06" }
];


//----3.B Populate the Table Dynamically----

function load_scores() {
  const scores_body = document.getElementById("scores-body");

  //----Clear the table body
  scores_body.innerHTML = "";

  //----Insert one row per score & add rank automatically
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    const row = document.createElement("tr");

    const rank_cell = document.createElement("td");
    rank_cell.textContent = i + 1;

    const player_cell = document.createElement("td");
    player_cell.textContent = score.player;

    const moves_cell = document.createElement("td");
    moves_cell.textContent = score.moves;

    const time_cell = document.createElement("td");
    time_cell.textContent = score.time;

    const date_cell = document.createElement("td");
    date_cell.textContent = score.date;

    row.appendChild(rank_cell);
    row.appendChild(player_cell);
    row.appendChild(moves_cell);
    row.appendChild(time_cell);
    row.appendChild(date_cell);

    scores_body.appendChild(row);
  }
}

document.addEventListener("DOMContentLoaded", load_scores);