//0- Unclicked, 1 - user, 2 - machine 
let game_array = [0,0,0,
                  0,0,0,
                  0,0,0];
let el = document.getElementById("game");
let game_btn = [];
let game_turn = 0;
let user_sign = "O";
let co_sign = "X";
const game_win = () =>{
  if(game_array[0] === 1 && game_array[1] === 1 && game_array[2] === 1) {
    return 1;
  }
  if(game_array[3] === 1 && game_array[4] === 1 && game_array[5] === 1) {
    return 1;
  }
  if(game_array[6] === 1 && game_array[7] === 1 && game_array[8] === 1) {
    return 1;
  }
  if(game_array[0] === 1 && game_array[3] === 1 && game_array[6] === 1) {
    return 1;
  }
  if(game_array[1] === 1 && game_array[4] === 1 && game_array[7] === 1) {
    return 1;
  }
  if(game_array[2] === 2 && game_array[5] === 1 && game_array[8] === 1) {
    return 1;
  }
  if(game_array[0] === 1 && game_array[4] === 1 && game_array[8] === 1) {
    return 1;
  }
  if(game_array[2] === 1 && game_array[4] === 1 && game_array[6] === 1) {
    return 1;
  }
  
  
  if(game_array[0] === 2 && game_array[1] === 2 && game_array[2] === 2) {
    return 2;
  }
  if(game_array[3] === 2 && game_array[4] === 2 && game_array[5] === 2) {
    return 2;
  }
  if(game_array[6] === 2 && game_array[7] === 2 && game_array[8] === 2) {
    return 2;
  }
  if(game_array[0] === 2 && game_array[3] === 2 && game_array[6] === 2) {
    return 2;
  }
  if(game_array[1] === 2 && game_array[4] === 2 && game_array[7] === 2) {
    return 2;
  }
  if(game_array[2] === 2 && game_array[5] === 2 && game_array[8] === 2) {
    return 2;
  }
  if(game_array[0] === 2 && game_array[4] === 2 && game_array[8] === 2) {
    return 2;
  }
  if(game_array[2] === 2 && game_array[4] === 2 && game_array[6] === 2) {
    return 2;
  }
  found = 3;
  for(let i = 0; i < 9; i++) {
    if(game_array[i] === 0) {
      found = 0;
    }
  }
  return found;
};

const computer_choice = () => {
  let count = 0;
  for(let i = 0; i < 9; i++) {
    if(game_array[i] === 0) count++;
  }
  let c = Math.floor(Math.random() * count);
  count = 0;
  for(let i = 0; i < 9; i++) {
    if(count === c && game_array[i] === 0) {
      game_array[i] = 2;
      game_turn = 0;
      return i;
    }
    if(game_array[i] === 0) count++;
  }
  game_array[8] = 2;
  game_turn = 0;
  return 8;
};


for(let i = 0; i < 3; i++) {
  for(let j = 0; j < 3; j++){
    var bn = document.createElement("button");
    bn.id = ''.concat(i*3 + j);
    if(i === 0 || i === 1) {
      bn.style.border = "none";
      bn.style.borderBottom = "4px solid grey";
    }
    if(i === 2) {
      bn.style.border = "none";      
    }
    if(j === 0 || j === 1) {
      bn.style.borderRight =  "4px solid grey";
    }
    bn.style.backgroundColor = "rgb(20,189,172)";
    //console.log("id=" + bn.id);
    //bn.innerHTML = "O";
    bn.addEventListener("click", function(e){
      
      let i = parseInt(this.id);
      console.log(i);
      if(game_turn === 0 && game_array[i] === 0) {
        this.innerHTML = user_sign;
        this.style.color ="rgb(85,85,85)";
        this.style.fontSize = "24px";
        game_turn = 1;
        game_array[i] = 1;
        let win = game_win();
        if(win === 1) {
          document.getElementById("result").innerHTML = "You win!";
          game_turn = 3;
        }
        if(win === 3) {
          document.getElementById("result").innerHTML = "It is a tie";
          game_turn = 3;
        }
      //} else if(game_turn === 1 && game_array[i] === 0) {
        if(game_turn === 1){
        i = computer_choice();
        let el1 = document.getElementById(`${i}`);
        el1.innerHTML = co_sign;
        el1.style.color ="rgb(240,235,211)";
        el1.style.fontSize = "24px";
        game_turn = 0;
        game_array[i] = 2;
        win = game_win();
        if(win === 2) {
          document.getElementById("result").innerHTML = "Computer win!";
          game_turn = 3;
        }
        if(win === 3) {
          document.getElementById("result").innerHTML = "It is a tie";
          game_turn = 3;
        }
      }
      }
    });
    game_btn.push(bn);
    el.appendChild(bn);
  }
}

let re = document.getElementById("game_restart");
re.addEventListener("click", function(e) {
  for(let i = 0; i < 9;i++) {
    game_array[i] = 0;
    document.getElementById(`${i}`).innerHTML = '';
  }
  game_turn = 0;
  document.getElementById("result").innerHTML = "";
});