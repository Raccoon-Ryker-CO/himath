//Start of Himath
const isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
const isChromeOS = (/\bCrOS\b/.test(navigator.userAgent));
var date = new Date();
var month = date.getMonth();
let lastsetting = "tst";
let avatarnum = 1;
let points = 0;
let hardness = 10;
let questions = 0;
let pet = 1;
let gamemode = 0;
function load() {
    //Get the holiday
    console.log("Getting a holiday...");
    if (month == 0) {
        document.getElementById("logo").src = "/media/himathlogos/newyears.png";
        console.log("Found a holiday! Loading logo...");
    }else if (month == 1) {
        document.getElementById("logo").src = "/media/himathlogos/valentines.png";
        console.log("Found a holiday! Loading logo...");
    }else if (month == 2) {
        document.getElementById("logo").src = "/media/himathlogos/stpatricksday.png";
        console.log("Found a holiday! Loading logo...");
    }else if (month == 3) {
        document.getElementById("logo").src = "/media/himathlogos/easter.png";
        console.log("Found a holiday! Loading logo...");
    }else if (month == 9) {
        document.getElementById("logo").src = "/media/himathlogos/halloween.png";
        console.log("Found a holiday! Loading logo...");
    }else if (month == 10) {
        document.getElementById("logo").src = "/media/himathlogos/thanksgiving.png";
        console.log("Found a holiday! Loading logo...");
    }else if (month == 11) {
        document.getElementById("logo").src = "/media/himathlogos/christmas.png";
        console.log("Found a holiday! Loading logo...");
    }else {
        console.error("No holiday detected. Normal logo loading...");
    }
    //Load
    document.querySelector("main").style.display='block';
    if (isChromeOS) {
       setTimeout(locompat,5000);
    } else {
        if (isMobile == false) {
        document.getElementById("dvtype").innerHTML = "Desktop";
    }else {
        document.getElementById("dvtype").innerHTML = "Mobile";
    }
       setTimeout(showgamemode,5000); 
    }
    
}

function play() {
    //Play the game
    document.getElementById("points").style.display='block';
    document.getElementById("questions").style.display='block';
    document.getElementById("points").innerHTML = "Points: " + points;
    document.getElementById("questions").innerHTML = "Questions: " + questions;
    document.getElementById("maintxt").style.display='block';
    document.getElementById("maintxt").innerHTML = "Select a operation:";
    document.getElementById("buttons").style.display='block';
    document.getElementById("startscreen").style.display='none';
}

function startgame() {
    //Show the menu
    document.getElementById("settings").style.display='none';
    document.getElementById("maintxt").style.display='none';
    document.getElementById("gamemode").style.display='none';
    document.getElementById("house").style.display='none';
    document.getElementById("house2").style.display='none';
    document.getElementById("startscreen").style.display='block';
    document.getElementById("helpscreen").style.display='none';
    document.getElementById("br1").style.display='none';
    document.getElementById("br2").style.display='none';
    document.getElementById("br3").style.display='none';
    document.getElementById("br4").style.display='none';
    document.getElementById("ansrdiff").style.display='none';
    document.getElementById("buttons").style.display='none';
    document.getElementById("nextbtn" + startmath).style.display='none';
    document.getElementById("answerfield").style.display='none';

}
setTimeout(load,100);
//More variables setup
let m1 = Math.floor((Math.random() * 10) + 1);
let m2 = Math.floor((Math.random() * 10) + 1);
let answer = m1 + m2;
let startmath = 0;
function math1() {
    //Plus operation
    console.log("Math operation set to 1");
    document.getElementById("questions").innerHTML = "Questions: " + questions;
    m1 = Math.floor((Math.random() * hardness) + 1);
    m2 = Math.floor((Math.random() * hardness) + 1);
    answer = m1 + m2;
    startmath = 1;
    answertextfld = document.getElementById("answertextfld");
    document.getElementById("ansrdiff").style.display='none';
    document.getElementById("nextbtn" + startmath).style.display='none';
    document.getElementById("buttons").style.display='none';
    document.getElementById("answerfield").style.display='block';
    document.getElementById("maintxt").innerHTML = "What is " + m1 + " + " + m2 + "?";
    answertextfld.value = "";
}

function math2() {
    //Minus operation
    console.log("Math operation set to 2");
    document.getElementById("questions").innerHTML = "Questions: " + questions;
    m1 = Math.floor((Math.random() * hardness) + 1);
    m2 = Math.floor((Math.random() * hardness) + 1);
    if (m1 < m2) {
        math2();
    } else {
    answer = m1 - m2;
    startmath = 2;
    answertextfld = document.getElementById("answertextfld");
    document.getElementById("ansrdiff").style.display='none';
    document.getElementById("nextbtn" + startmath).style.display='none';
    document.getElementById("buttons").style.display='none';
    document.getElementById("answerfield").style.display='block';
    document.getElementById("maintxt").innerHTML = "What is " + m1 + " - " + m2 + "?";
    answertextfld.value = "";
    }
    
}

function math3() {
    //Times operation
    console.log("Math operation set to 3");
    document.getElementById("questions").innerHTML = "Questions: " + questions;
    m1 = Math.floor((Math.random() * hardness) + 1);
    m2 = Math.floor((Math.random() * hardness) + 1);
    answer = m1 * m2;
    startmath = 3;
    answertextfld = document.getElementById("answertextfld");
    document.getElementById("ansrdiff").style.display='none';
    document.getElementById("nextbtn" + startmath).style.display='none';
    document.getElementById("buttons").style.display='none';
    document.getElementById("answerfield").style.display='block';
    document.getElementById("maintxt").innerHTML = "What is " + m1 + " * " + m2 + "?";
    answertextfld.value = "";
}

function math4() {
    //Division operation
    console.log("Math operation set to 4");
    document.getElementById("questions").innerHTML = "Questions: " + questions;
    m2 = Math.floor((Math.random() * hardness) + 1);
    answer = Math.floor((Math.random() * hardness) + 1);
    m1 = answer * m2;
    startmath = 4;
    answertextfld = document.getElementById("answertextfld");
    document.getElementById("ansrdiff").style.display='none';
    document.getElementById("nextbtn" + startmath).style.display='none';
    document.getElementById("buttons").style.display='none';
    document.getElementById("answerfield").style.display='block';
    document.getElementById("maintxt").innerHTML = "What is " + m1 + " / " + m2 + "?";
    answertextfld.value = "";
}

function randomizemath() {
    //Randomizes the operation
    let randompicker = 0;
    randompicker = Math.floor((Math.random() * 4) + 1);
    if (randompicker == 1) {
        math1();
    }else if (randompicker == 2) {
        math2();
    }else if (randompicker == 3) {
        math3();
    }else if (randompicker == 4) {
        math4();
    }
}

function hint() {
    window.open('/himath/hintwindow.html','_blank','width=900px','height=500px');
}

function answermath() {
    //Checks if the answer is correct
    if (answertextfld.value == answer){
            document.getElementById("maintxt").innerHTML = "Congragulations! You earned " + answer + " points!";
            document.getElementById("answerfield").style.display='none';
            document.getElementById("nextbtn" + startmath).style.display='block';
            document.getElementById("ansrdiff").style.display='block';
            document.getElementById("br" + startmath).style.display='block';
            points = points + answer;
            questions = questions + 1;
            document.getElementById("points").innerHTML = "Points: " + points;
            
    }else {
        document.getElementById("maintxt").innerHTML = "Aww... Try again later. You lost " + answer + " points.";
        document.getElementById("answerfield").style.display='none';
        document.getElementById("nextbtn" + startmath).style.display='block';
        document.getElementById("ansrdiff").style.display='block';
        document.getElementById("br" + startmath).style.display='block';
        points = points - answer;
        questions = questions + 1;
        document.getElementById("points").innerHTML = "Points: " + points;

    }

}

function help() {
    //Get help
    document.getElementById("helpscreen").style.display='block';
    document.getElementById("startscreen").style.display='none';
}

function house() {
    //Your house
    document.getElementById("startscreen").style.display='none';
    document.getElementById("minigames").style.display='none';
    document.getElementById("house").style.display='block';
    document.getElementById("house2").style.display='block';
    document.getElementById("petroom").style.display='none';
    document.getElementById("petroom2").style.display='none';
    document.getElementById("avatarp" + avatarnum).style.display='none';
    document.getElementById("backyard").style.display='none';
    document.getElementById("backyard2").style.display='none';
    document.getElementById("avatar" + avatarnum).style.display='block';
}

function changeavatar(changedavatar) {
    //Change your avatar
    document.getElementById("avatar" + avatarnum).style.display='none';
    avatarnum = changedavatar;
    document.getElementById("avatar" + avatarnum).style.display='block';
}

function minigames() {
    //Play mini-games
    document.getElementById("house").style.display='none';
    document.getElementById("house2").style.display='none';
    document.getElementById("minigames").style.display='block';
    document.getElementById("avatarm" + avatarnum).style.display='block';
}

function gamemodehome() {
    //Your at home
    document.getElementById("currentgamemode").innerHTML = "Home";
    gamemode = 1;
    startgame();
}

function gamemodeschool() {
    //Your at school
    document.getElementById("currentgamemode").innerHTML = "School";
    document.getElementById("limit").style.display='none';
    gamemode = 2;
    startgame();
}

function showgamemode() {
    //Select a gamemode
    document.getElementById("gamemode").style.display='block';
    document.getElementById("maintxt").style.display='none';
    document.getElementById("funfact2").style.display='none';
}

function backyard() {
    //Play in your backyard
    document.getElementById("house").style.display='none';
    document.getElementById("house2").style.display='none';
    document.getElementById("backyard").style.display='block';
    document.getElementById("backyard2").style.display='block';
    document.getElementById("trampoline").style.display='none';
    document.getElementById("trampolinemobile").style.display='none';
    document.getElementById("pool").style.display='none';
    document.getElementById("poolmobile").style.display='none';
    document.getElementById("avatarb" + avatarnum).style.display='block';
    document.getElementById("bbq").style.display='none';
}

function trampoline() {
    //Checks if the device is mobile
    if (isMobile) {
        //Mobile Script
        document.getElementById("trampolinemobile").style.display='block';
        document.getElementById("backyard").style.display='none';
        document.getElementById("backyard2").style.display='none';  
    }else {
        //PC Script
        document.getElementById("trampoline").style.display='block';
        document.getElementById("backyard").style.display='none';
        document.getElementById("backyard2").style.display='none'; 
    }

}

function pool() {
    //Checks if the device is mobile
    if (isMobile) {
        //Mobile Script
    document.getElementById("poolmobile").style.display='block';
    document.getElementById("backyard").style.display='none';
    document.getElementById("backyard2").style.display='none';        
    }else {
        //PC Script
    document.getElementById("pool").style.display='block';
    document.getElementById("backyard").style.display='none';
    document.getElementById("backyard2").style.display='none';
    }
}

function bbq() {
    document.getElementById("bbq").style.display='block';
    document.getElementById("backyard").style.display='none';
    document.getElementById("backyard2").style.display='none';
}

function settings() {
    //Change settings
    document.getElementById("settings").style.display='block';
    document.getElementById("startscreen").style.display='none';
}

function setting(setting) {
    //Sets a setting
    document.getElementById(lastsetting).style.display='none';
    document.getElementById(setting).style.display='block';
    lastsetting = setting;
}

function difficulty(difficulty) {
    if (difficulty == 1) {
        hardness = 10;
    }else if (difficulty == 2) {
        hardness = 50;
    }else if (difficulty == 3) {
        hardness = 100;
    }else if (difficulty == 4) {
        hardness = 160;
    }else if (difficulty == 5) {
        if (document.getElementById("customdiff").value > 1000000) {
            alert("Value is higher than one million. Changes are not saved.");
            document.getElementById("customdiff").value = "";
        } else if (document.getElementById("customdiff").value < 1) {
            alert("Value is lower than 1. Changes are not saved.");
            document.getElementById("customdiff").value = "";
        } else {
            hardness = document.getElementById("customdiff").value;
        }
        
    }
}

function petroom() {
    document.getElementById("house").style.display='none';
    document.getElementById("house2").style.display='none';
    document.getElementById("petplay").style.display='none';
    document.getElementById("petroom").style.display='block';
    document.getElementById("petroom2").style.display='block';
    document.getElementById("avatarp" + avatarnum).style.display='block';
}

function playpet() {
    document.getElementById("petroom").style.display='none';
    document.getElementById("petroom2").style.display='none';
    document.getElementById("avatarp" + avatarnum).style.display='none';
    document.getElementById("petplay" + pet).style.display='block';
}

function petchange(petnum) {
    //Change your pet
    document.getElementById("petroom").style.backgroundImage='url("media/himathpetroom' + pet + '.png")';
    pet = petnum;
}

function locompat() {
    //Low Compatibility Mode
    document.getElementById("locompat").style.display='block';
    gamemodeschool();
}

function locompatoff() {
    //Low Compatibility Mode Off
    document.getElementById("limit").style.display='block';
    document.getElementById("locompat").style.display='none';
}
//End of Himath