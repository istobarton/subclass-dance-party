var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this._top = top;
  this._left = left;
  this.step();
  this.setPosition(top, left);
  var that = this;
  this.$node.on("click", this.move(this._top, this._left)); // temp testing for move method

  // GOOD CODE BELOW, KEEP!!
  this.$node.on("mouseenter", function(event){
    that.$node.css({"border-image": "url('glitter.jpg')", "border-radius" : "10px"});
  });
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

Dancer.prototype.lineup = function(){
  this.$node.css({left: '250px'});
};

Dancer.prototype.move = function(){
  var y1 = this._top;
  var x1 = this._left;
  for (var i = 0; i < dancers.length; i++) {
    var y2 = dancers[i]._top;
    var x2 = dancers[i]._left;
    var d = Math.sqrt(Math.pow((y1-y2), 2) + Math.pow((x1-x2), 2));
    if(d>400){
       console.log(Math.floor(d));
       this.$node.css({left: x1 + 400, top: y1 + 400});
    }
  }
};
// // http://api.jquery.com/css/
