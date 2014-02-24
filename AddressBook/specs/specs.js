describe('fiBonacci', function() {
  it('returns 0 as the first fiBonacci number', function() {
    fiBonacci(1).should.equal(0);
  });
  it('returns 1 as the second fiBonacci number', function() {
    fiBonacci(2).should.equal(1);
  });
  it('returns 1 as the third fiBonacci number', function() {
    fiBonacci(3).should.equal(1);
  });
  it('returns 2 as the fourth fiBonacci number', function() {
    fiBonacci(4).should.equal(2);
  });
  it('returns 21 as the ninth fiBonacci number', function() {
    fiBonacci(9).should.equal(21);
  });
});



