// ------------------------------------------------------------
// High Scores — Memory Match
// ------------------------------------------------------------

// Lab 3 - Part 3: Dynamic Content


// ----3.A High Scores Data----

const scores_list = [
  { player: "Ava", moves: 22, time: 58, date: "2026-01-10" },
  { player: "Noah", moves: 24, time: 63, date: "2026-01-09" },
  { player: "Mia", moves: 26, time: 71, date: "2026-01-08" },
  { player: "Liam", moves: 27, time: 75, date: "2026-01-07" },
  { player: "Zoe", moves: 29, time: 82, date: "2026-01-06" },
  { player: "Ethan", moves: 30, time: 88, date: "2026-01-06" },
  { player: "Ivy", moves: 31, time: 90, date: "2026-01-05" },
  { player: "Sam", moves: 33, time: 95, date: "2026-01-05" },
  { player: "Kai", moves: 34, time: 101, date: "2026-01-04" },
  { player: "Emma", moves: 35, time: 104, date: "2026-01-03" }
];


// ----3.B Populate the Table Dynamically----

function load_scores() {
  const scores_body = document.getElementById("scores-body");

  // Clear the scores table  
  scores_body.innerHTML = "";

  // insert one row per score and add the rank automatically
  for (let i = 0; i < scores_list.length; i++) {
    const score_item = scores_list[i];
    const row_el = document.createElement("tr");

    row_el.innerHTML = `
      <td>${i + 1}</td>
      <td>${score_item.player}</td>
      <td>${score_item.moves}</td>
      <td>${score_item.time}</td>
      <td>${score_item.date}</td>
    `;

    scores_body.appendChild(row_el);
  }
}

document.addEventListener("DOMContentLoaded", load_scores);
