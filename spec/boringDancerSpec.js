describe("boringDancer", function(){

  var boringDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function(){
    clock = sinon.useFakeTimers();
    boringDancer = new BoringDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(boringDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a fade-step function that makes its node fade in and out", function() {
    sinon.spy(boringDancer.$node, 'fadeToggle');
    boringDancer.step();
    expect(boringDancer.$node.fadeToggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should have timeBetweenSteps match 5000", function(){
      sinon.spy(boringDancer, "step");
      expect(boringDancer._timeBetweenSteps).to.be.equal(5000);
    });
  });
});
