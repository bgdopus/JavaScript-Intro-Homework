// Using NaN instead of null is a clever hack. See checkForWinner for details.
var spaces = [
  NaN, NaN, NaN,
  NaN, NaN, NaN,
  NaN, NaN, NaN
];

var player1 = 'zero';
var player2 = 'ex';
var currentPlayer = null;

var setNextTurn = function () {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  }
  else {
    currentPlayer = player1;
  }
  $('#turn-label').text(currentPlayer);
};

var checkForWinner = function () {
  // Because (NaN === NaN) is always false, we can safely assume
  // that if three spaces in a row are the same, all three spaces are
  // marked by a player, and not all empty.

  if ( spaces[0] === spaces[1] && spaces[1] === spaces[2]
    || spaces[3] === spaces[4] && spaces[4] === spaces[5]
    || spaces[6] === spaces[7] && spaces[7] === spaces[8]
    // TODO: Check for rest of game winning cases
  )
  {
    console.log('somebody won');
    // TODO: Trigger 'game-win' event with the winning player as the event data
  }
};

$(document).on('click', '#board .space', function (e) {
  var spaceNum = $(e.currentTarget).index();
  console.log('You clicked on space #' + spaceNum);

  // Mark the space with the current player's name
  // TODO: Don't mark it unless the space is blank
  spaces[spaceNum] = currentPlayer;
  // Add class to elem so css can take care of the visuals
  $('#board .space:eq(' + spaceNum + ')').addClass(currentPlayer);

  checkForWinner();
  setNextTurn();
});

$(document).on('game-win', function (winner) {
  // TODO: Alert who won the game
});

// Start the game
setNextTurn();