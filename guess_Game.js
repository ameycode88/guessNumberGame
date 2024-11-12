const max=prompt("Enter max number");

let random=Math.floor(Math.random()*max)+1;//1 to max

console.log(random);

let guess=prompt("Guess the number");
while(true){
    if(guess=="quit"){
        console.log("User Quit!");
        break;
    }

    if(guess==random){
        console.log(`Congratulations! U R right! Random number was ${random}.`);
        break;
    }else if(guess<random){
        guess=prompt("hint:your guessed num is too small.Plz enter larger number ")
    
    }else{
        guess=prompt("hint:your guessed num is too large.Plz enter smaller number ")
    
    }
}

