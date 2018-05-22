var assert = require('assert');
var Athlete = require('../athlete');
var WaterBottle = require('../water_bottle');

describe('athlete', function () {
  var athlete;
  var bottle;

  beforeEach(function () {
    athlete = new Athlete();
    bottle = new WaterBottle();
  });

  it('should have a hydration attribute that starts at 100', function () {
    assert.strictEqual(100, athlete.hydration);
  });

  it('should have a distance covered attribute starts at 0', function () {
    assert.strictEqual(0, athlete.distanceCovered);
  });

  it('should be able to run: increasing distance, decreasing hydration', function () {
    athlete.run(10);
    assert.strictEqual(90,athlete.hydration);
    assert.strictEqual(10,athlete.distanceCovered);
  });

  it('should not go below 0 hydration', function () {
    athlete.hydration = 2;
    athlete.dehydrate();
    assert.strictEqual(0, athlete.hydration);
  });

  it('should not move when running dehydrated: hydration at 0', function () {
    athlete.hydration = 0;
    athlete.run(10);
    assert.strictEqual(0,athlete.hydration);
    assert.strictEqual(0,athlete.distanceCovered);
  });

  it('should be able to increase hydration by drinking from water bottle', function () {
    athlete.hydration = 0;
    bottle.fill();
    athlete.drink(bottle);
    assert.strictEqual(10, athlete.hydration);
  });
});
