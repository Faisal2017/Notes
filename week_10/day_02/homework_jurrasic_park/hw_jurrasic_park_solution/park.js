var Park = function() {
  this.enclosure = [];
}

Park.prototype = {

  addDinosaur: function(dinosaur) {
    this.enclosure.push(dinosaur);
  },

  removeDinosaurByType: function(type) {
    for (var i = this.enclosure.length - 1; i >= 0; i--) {
      if (this.enclosure[i].type === type) {
        this.enclosure.splice(i, 1);
      }
    }
  },

  dinosaursWithOffSpringMoreThan: function(amount) { 
    var foundDinosaurs = [];
    for (var i = 0; i < this.enclosure.length; i++) {
      if (this.enclosure[i].annualOffspring > amount) {
        foundDinosaurs.push(this.enclosure[i]);
      }
    }
    return foundDinosaurs;
  },

  calculateDinosaurs: function(years) {
    var total = 0; 
    for (dinosaur of this.enclosure) {
      count = 1;
      for (var i = 0; i < years; i++) {
        count += dinosaur.annualOffspring * count;
      }
      total += count;
    }
    return total;
  }

}

module.exports = Park;