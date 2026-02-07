// ------------------------------------------------------------
// Memory Match
// ------------------------------------------------------------

// Lab 3 - Part 3: Dynamic Content


//----3.A Build the Board Dynamically----

const card_symbols = ["🍎", "🍌", "🍇", "🍉", "🍒", "🥝", "🍍", "🍑"];
const total_pairs = 8;

let board_layout = [];
let first_card = null;
let lock_board = false;

let move_count = 0;
let match_count = 0;
let elapsed_time = 0;
let timer_id = null;


//----Shuffle helper----
function shuffle_array(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}


//----3.C Track Moves, Matches, and Time----

function reset_stats() {
  move_count = 0;
  match_count = 0;
  elapsed_time = 0;

  document.getElementById("moves").textContent = move_count;
  document.getElementById("matches").textContent = match_count;
  document.getElementById("time").textContent = elapsed_time;

  const message_box = document.getElementById("message");
  message_box.textContent = "";
  message_box.classList.remove("win");

  if (timer_id) clearInterval(timer_id);

  timer_id = setInterval(() => {
    elapsed_time++;
    document.getElementById("time").textContent = elapsed_time;
  }, 1000);
}


//----3.A Build the Board Dynamically and create the cards in JS----

function build_board(shuffle_new) {
  const board = document.getElementById("board");
  board.innerHTML = "";

  if (shuffle_new) {
    board_layout = card_symbols.concat(card_symbols);
    shuffle_array(board_layout);
  }

  for (const value of board_layout) {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.value = value;

    const face = document.createElement("div");
    face.className = "card-face";
    face.textContent = value;

    card.appendChild(face);
    card.addEventListener("click", () => handle_card_click(card));

    board.appendChild(card);
  }
}


//----3.B Implement Card Flipping and Matching Rules----

function handle_card_click(card) {
  if (lock_board) return;
  if (card.classList.contains("flipped")) return;
  if (card.classList.contains("matched")) return;

  card.classList.add("flipped");

  if (!first_card) {
    first_card = card;
    return;
  }

  lock_board = true;

  move_count++;
  document.getElementById("moves").textContent = move_count;

  const is_match = first_card.dataset.value === card.dataset.value;

  if (is_match) {
    first_card.classList.add("matched");
    card.classList.add("matched");

    match_count++;
    document.getElementById("matches").textContent = match_count;

    first_card = null;
    lock_board = false;

    //----3.D Game Completion----
    if (match_count === total_pairs) {
      clearInterval(timer_id);
      timer_id = null;

      const message_box = document.getElementById("message");
      message_box.classList.add("win");
      message_box.textContent =
        "YAY, congrats you won :) " + move_count + " moves, " + elapsed_time + " seconds.";
    }

    return;
  }

  first_card.classList.add("wrong");
  card.classList.add("wrong");

  setTimeout(() => {
    first_card.classList.remove("flipped", "wrong");
    card.classList.remove("flipped", "wrong");

    first_card = null;
    lock_board = false;
  }, 800);
}


//----3.E Buttons----

function new_game() {
  reset_stats();
  first_card = null;
  lock_board = false;
  build_board(true);
}

function reset_same_board() {
  reset_stats();
  first_card = null;
  lock_board = false;

  document.querySelectorAll("#board .card").forEach((card) => {
    card.classList.remove("flipped", "matched", "wrong");
  });
}


//----Run when page loads----

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("total-pairs").textContent = total_pairs;

  document.getElementById("btn-new-game").addEventListener("click", new_game);
  document.getElementById("btn-reset").addEventListener("click", reset_same_board);

  new_game();
});