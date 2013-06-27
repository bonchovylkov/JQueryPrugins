module("Food.init");
test("When food is initialized, should set the correct values", function () {
    var position = {
        x: 150,
        y: 150
    };
    var size = 15;
    var food = new snakeGame.Food(position, size);
    equal(position, food.position, "Position is set");
    equal(size, food.size, "Size is set");
});
test("When food is initialized, should set the correct values", function () {
    var position = {
        x: 200,
        y: 200
    };
    var size = 99;
    var food = new snakeGame.Food(position, size);
    equal(position, food.position, "Position is set");
    equal(size, food.size, "Size is set");
});
test("When food is initialized, should set the correct values", function () {
    var position = {
        x: 300,
        y: 300
    };
    var size = 1;
    var food = new snakeGame.Food(position, size);
    equal(position, food.position, "Position is set");
    equal(size, food.size, "Size is set");
});

