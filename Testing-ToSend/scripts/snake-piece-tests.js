module("SnakePiece.init");
test("should set correct values",   
  function(){
    var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 0;
    var piece = new snakeGame.SnakePiece(position, size, speed, dir);
    equal(piece.position, position)
    equal(piece.size, 15);
    equal(piece.speed, speed);
    equal(piece.direction, dir);
  });

module("SnakePiece.move");
test("When direction is 0, decrease x",
  function(){
    var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 0;
    var piece = new snakeGame.SnakePiece(position, size, speed, dir);
    piece.move();
    position.x - speed;
    deepEqual(piece.position, position);
  });
test("When  direction is 1, decrease update y",
  function(){
    var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 1;
    var piece = new snakeGame.SnakePiece(position, size, speed, dir);
    piece.move();
    position.y - speed;
    deepEqual(piece.position, position);
  });
test("When  direction is 2, increase x",
  function(){
    var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 2;
    var piece = new snakeGame.SnakePiece(position, size, speed, dir);
    piece.move();
    position.x + speed;
    deepEqual(piece.position, position);
  });
test("When  direction is 3, should increase x",
  function(){
    var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 3;
    var piece = new snakeGame.SnakePiece(position, size, speed, dir);
    piece.move();
    position.y + speed;
    deepEqual(piece.position, position);
  });

module("SnakePiece.change direction");
test("When direction is 0,try to change it to 0-nothing shoud happend",
  function () {
      var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 0;
      var piece = new snakeGame.SnakePiece(position, size, speed, dir);
      piece.changeDirection(0);
      var actual = piece.direction;
      var expected = 0;
      deepEqual(actual, expected);
  });
test("When direction is 0,try to change it to 2-nothing shoud happend",
  function () {
      var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 0;
      var piece = new snakeGame.SnakePiece(position, size, speed, dir);
      piece.changeDirection(2);
      var actual = piece.direction;
      var expected = 0;
      deepEqual(actual, expected);
  });
test("When direction is 0,try to change it to 5-nothing shoud happend",
function () {
    var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 0;
    var piece = new snakeGame.SnakePiece(position, size, speed, dir);
    piece.changeDirection(5);
    var actual = piece.direction;
    var expected = 0;
    deepEqual(actual, expected);
});

test("When direction is 0,try to change it to 1-shoud be 1",
  function () {
      var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 0;
      var piece = new snakeGame.SnakePiece(position, size, speed, dir);
      piece.changeDirection(1);
      var actual = piece.direction;
      var expected = 1;
      deepEqual(actual, expected);
  });
test("When direction is 0,try to change it to 3-shout be 3",
  function () {
      var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 0;
      var piece = new snakeGame.SnakePiece(position, size, speed, dir);
      piece.changeDirection(3);
      var actual = piece.direction;
      var expected = 3;
      deepEqual(actual, expected);
  });

test("When direction is 1,try to change it to 1-nothing shoud happend",
  function () {
      var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 1;
      var piece = new snakeGame.SnakePiece(position, size, speed, dir);
      piece.changeDirection(1);
      var actual = piece.direction;
      var expected = 1;
      deepEqual(actual, expected);
  });
test("When direction is 1,try to change it to 3-nothing shoud happend",
  function () {
      var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 1;
      var piece = new snakeGame.SnakePiece(position, size, speed, dir);
      piece.changeDirection(3);
      var actual = piece.direction;
      var expected = 1;
      deepEqual(actual, expected);
  });
test("When direction is 1,try to change it to 5-nothing shoud happend",
function () {
    var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 1;
    var piece = new snakeGame.SnakePiece(position, size, speed, dir);
    piece.changeDirection(5);
    var actual = piece.direction;
    var expected = 1;
    deepEqual(actual, expected);
});

test("When direction is 1,try to change it to 2-shoud be 2",
  function () {
      var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 1;
      var piece = new snakeGame.SnakePiece(position, size, speed, dir);
      piece.changeDirection(2);
      var actual = piece.direction;
      var expected = 2;
      deepEqual(actual, expected);
  });
test("When direction is 1,try to change it to 0-shout be 0",
  function () {
      var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 1;
      var piece = new snakeGame.SnakePiece(position, size, speed, dir);
      piece.changeDirection(0);
      var actual = piece.direction;
      var expected = 0;
      deepEqual(actual, expected);
  });
//2
test("When direction is 2,try to change it to 2-nothing shoud happend",
  function () {
      var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 2;
      var piece = new snakeGame.SnakePiece(position, size, speed, dir);
      piece.changeDirection(2);
      var actual = piece.direction;
      var expected = 2;
      deepEqual(actual, expected);
  });
test("When direction is 2,try to change it to 0-nothing shoud happend",
  function () {
      var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 2;
      var piece = new snakeGame.SnakePiece(position, size, speed, dir);
      piece.changeDirection(0);
      var actual = piece.direction;
      var expected = 2;
      deepEqual(actual, expected);
  });
test("When direction is 2,try to change it to 5-nothing shoud happend",
function () {
    var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 2;
    var piece = new snakeGame.SnakePiece(position, size, speed, dir);
    piece.changeDirection(5);
    var actual = piece.direction;
    var expected = 2;
    deepEqual(actual, expected);
});

test("When direction is 2,try to change it to 1-shoud be 1",
  function () {
      var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 2;
      var piece = new snakeGame.SnakePiece(position, size, speed, dir);
      piece.changeDirection(1);
      var actual = piece.direction;
      var expected = 1;
      deepEqual(actual, expected);
  });
test("When direction is 2,try to change it to 3-shout be 3",
  function () {
      var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 2;
      var piece = new snakeGame.SnakePiece(position, size, speed, dir);
      piece.changeDirection(3);
      var actual = piece.direction;
      var expected = 3;
      deepEqual(actual, expected);
  });
//3
test("When direction is 3,try to change it to 3-nothing shoud happend",
  function () {
      var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 3;
      var piece = new snakeGame.SnakePiece(position, size, speed, dir);
      piece.changeDirection(3);
      var actual = piece.direction;
      var expected = 3;
      deepEqual(actual, expected);
  });
test("When direction is 3,try to change it to 1-nothing shoud happend",
  function () {
      var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 3;
      var piece = new snakeGame.SnakePiece(position, size, speed, dir);
      piece.changeDirection(1);
      var actual = piece.direction;
      var expected = 3;
      deepEqual(actual, expected);
  });
test("When direction is 3,try to change it to 5-nothing shoud happend",
function () {
    var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 3;
    var piece = new snakeGame.SnakePiece(position, size, speed, dir);
    piece.changeDirection(5);
    var actual = piece.direction;
    var expected = 3;
    deepEqual(actual, expected);
});

test("When direction is 3,try to change it to 2-shoud be 2",
  function () {
      var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 3;
      var piece = new snakeGame.SnakePiece(position, size, speed, dir);
      piece.changeDirection(2);
      var actual = piece.direction;
      var expected = 2;
      deepEqual(actual, expected);
  });
test("When direction is 3,try to change it to 0-shout be 0",
  function () {
      var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 3;
      var piece = new snakeGame.SnakePiece(position, size, speed, dir);
      piece.changeDirection(0);
      var actual = piece.direction;
      var expected = 0;
      deepEqual(actual, expected);
  });