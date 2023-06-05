/*
Stephen Wei
Rocket Patrol : Better Version
Time: 15 + hrs
Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (15)
Implement a new timing/scoring mechanism that adds time to the clock for successful hits (15)
Implement mouse control for player movement and mouse click to fire (15)
Display the time remaining (in seconds) on the screen (10)
Add your own (copyright-free) background music to the Play scene (please be mindful of the volume) (5)
My own ideas:
Making one of the ship go opposite directions(15)
Making it -5 points after not making a successful shot(15)
Play an awkward audio when that happens(15)
Timer slows down towards the last couple seconds to give the player extra chances(15)
*/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }
  let game = new Phaser.Game(config);
  // reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
  // set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
