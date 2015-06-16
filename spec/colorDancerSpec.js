describe("colorDancer", function() {

  var colorDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colorDancer = new ColorDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(colorDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("animate", function(){
    it("should be animated", function() {
      sinon.spy(colorDancer.$node, 'animate');
      colorDancer.step();
      expect(colorDancer.$node.animate.called).to.be.true;
    });
  });
});
