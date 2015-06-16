var BoringDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css({'border' : '30px solid white'})
  this._timeBetweenSteps = 5000;
};

BoringDancer.prototype = Object.create(Dancer.prototype);
BoringDancer.prototype.constructor = BoringDancer;
BoringDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
};

