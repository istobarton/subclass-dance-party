var ColorDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  var colorArray = ['#FF0066', '#FFCC66', '#9999FF', '#FF5050', '#FFCC00', '#66FFCC'];
  var colorPicker = Math.floor(Math.random() * colorArray.length-1)
  this.$node.css(
    {'border-color' : colorArray[colorPicker]})
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;
ColorDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle(function() { $(this).animate({height: "400px", width: "400px"}); });
};
