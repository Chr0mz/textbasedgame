/* 
Danish: 
youtube univers - man starter som en youtuber, og kæmper til sidst mod Ben Shapiro
Sidste boss er T-Series / PewDiePie

English:
Youtube universe, start off as a YouTuber, fight your way to the top against bosses. Last boss is either T-Series or PewDiePie
*/


//Dont mind it being Danish / Says: Every answer has to be capital first letter.
alert("Alle svar skal være med stort forbogstav.");

// Rum 1
// Function1 spørger om du er klar til at spille. / Asks if you're ready to play in Danish
function f1() {
  var p1 = prompt("Er du klar til at spille?");
  parseInt(p1)

  // Udskriver tekst hvis svaret er ja. / Prints text if answer is yes
  if(p1 == "Ja") {
    console.log("Du er i dit hus. Huset ligger ude midt på landet. Der er mindst 15km til nærmeste by, og hvis du skal derind skal du gå. Du har nemlig ingen bil, cykel eller knallert etc.");
    

  }
  // Restarter hvis svaret er nej, som tvinger spilleren til at skrive ja. / Resets the game if answer = nej (no in Danish), forces the player to answer yes.
  if(p1 == "Nej"){
    setTimeout(f1(), 1000);
  }

}
f1();
// Rum 2 / Room 2
function f2(){

}


// Rum 3 / Room 3
function f3() {


}



// Rum 4 / Room 4
function f4() {


}



// Rum 5 / Room 5
function f5() {


}



// Rum 6 / Room 6
// Du møder jp her. / You meet Jake Paul here.
function f6() {
console.log ("Du befinder dig i en skov, der er træer så langt øjet rækker")

}



// Rum 7 / Room 7
function f7() {


}


// Rum 8 / Room 8
function f8() {


}



// Rum 9 / Room 9
function f9() {


}


// Rum 10 / Room 10
function f10() {


}
