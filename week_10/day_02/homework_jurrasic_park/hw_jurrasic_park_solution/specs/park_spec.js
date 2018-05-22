var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur');

describe('Park', function() {

  var park;
  var dilophosaurus;
  var velociraptor1;
  var velociraptor2;
  var velociraptor3;
  var velociraptor4;
  

  beforeEach(function() {
    park = new Park();
    tyrannosaurus = new Dinosaur("tyrannosaurus", 3);
    dilophosaurus = new Dinosaur("dilophosaurus", 2);
    velociraptor1 = new Dinosaur("velociraptor", 3);
    velociraptor2 = new Dinosaur("velociraptor", 3);
    velociraptor3 = new Dinosaur("velociraptor", 3);
    velociraptor4 = new Dinosaur("velociraptor", 3);
  });

  it('should start empty', function() {
    assert.strictEqual(0, park.enclosure.length);
  })

  it('should be able to add Dinosaur', function(){
    park.addDinosaur(tyrannosaurus);
    assert.strictEqual(1, park.enclosure.length)
  })

  it('should be able to remove all dinosaurs of a particular type and return modified enclosure', function(){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(dilophosaurus);
    park.addDinosaur(velociraptor1);
    park.addDinosaur(velociraptor2);
    park.addDinosaur(velociraptor3);
    park.addDinosaur(velociraptor4);
    park.removeDinosaurByType("velociraptor");
    assert.strictEqual(2, park.enclosure.length);
  })

  it('should get all the dinosaurs with an average offspring count of more than 2', function(){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(dilophosaurus);
    park.addDinosaur(velociraptor1);
    assert.strictEqual(2, park.dinosaursWithOffSpringMoreThan(2).length);
  })

  it('should be able to calculate number of dinosaurs after 1 years starting with 1 dinosaur', function(){
    park.addDinosaur(tyrannosaurus);
    assert.strictEqual(4, park.calculateDinosaurs(1));
  })

  it('should be able to calculate number of dinosaurs after 2 years starting with 1 dinosaur', function(){
    park.addDinosaur(tyrannosaurus);
    assert.strictEqual(16, park.calculateDinosaurs(2));
  })

  it('should be able to caluculate number of dinosaur after year two starting with 2 dinosaurs', function(){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(dilophosaurus);
    assert.strictEqual(25, park.calculateDinosaurs(2));
  })

})