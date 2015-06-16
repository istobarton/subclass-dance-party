var ColorDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  var colorArray = ['pink', 'black', 'red', 'purple', 'orange', 'yellow']
  var colorPicker = Math.ceil(Math.random() * colorArray.length)
  this.$node.css(
    {'border-color' : colorArray[colorPicker]})
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;
ColorDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
