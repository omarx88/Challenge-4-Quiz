//Question Layouts//

//What year were the Chicago Bulls founded?
//1999
//1987
//1956
//1966*


//What was the first jersey number retired by the Bulls?
//4*
//23
//33
//1


//Which Chicago Bulls coach has the highest winning percentage?
//Tom Thibodeau
//Doug Collins
//Phil Jackson*
//Jerry Sloan

//How mancy sccoring titles did Michael Jordan win during his career?
//8
//10*
//7
//6

//Who is the youngest player to win the NBA Most Valuable Player Award?
//Scottie Pippen
//Derrick Rose*
//Jerry Sloan
//Michael Jordan


// creat array and pass #, QA, and options
const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
//const quiz_box = info_box.querySelector(".quiz-box");


// If start Quiz Button Clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");// show the info box
}

// If exit Button Clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); // hide the text
}

// If continue Button Clicked
//continue_btn.onclick = ()=>{
    //info_box.classList.remove("activeInfo");// hide the text
   // info_box.classList.remove("activeInfo");// hide the text
