/* JavaScript for Basketball Scoreboard */

// variables for textContent

const homePts = document.getElementById("home-points-text");
const guestPts = document.getElementById("guest-points-text");

var homeScore = 0;
var guestScore = 0;

// functions for adding scores

// HOME
function add1Home() {
  homeScore += 1;
  homePts.textContent = homeScore;

}

function add2Home() {
  homeScore += 2;
  homePts.textContent = homeScore;

}

function add3Home() {
  homeScore += 3;
  homePts.textContent = homeScore;

}

// GUEST
function add1Guest() {
  guestScore += 1;
  guestPts.textContent = guestScore;

}

function add2Guest() {
  guestScore += 2;
  guestPts.textContent = guestScore;

}

function add3Guest() {
  guestScore += 3;
  guestPts.textContent = guestScore;

}

// functions for removing scores

// HOME
function subtractHome() {
  if (homeScore > 0) {
    homeScore -= 1;
    homePts.textContent = homeScore;
  }
}

// GUEST
function subtractGuest() {
  if (guestScore > 0) {
    guestScore -= 1;
    guestPts.textContent = guestScore;
  }
}

// function for reset or new game

function resetHome() {
  homeScore = 0;
  homePts.textContent = homeScore;
}

function resetGuest() {
  guestScore =0;
  guestPts.textContent = guestScore;
}
