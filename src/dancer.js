var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  var holdStep = this;
  setTimeout(function(){
    holdStep.step();
    }, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left,
  };
  this.$node.css(styleSettings);
};

// http://api.jquery.com/css/
