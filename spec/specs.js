describe('wordOrder', function() {
  it('will return the word "bouh"', function() {
    expect(wordOrder('bouh')).to.equal('bouh');
  });

  it('will return "bouh" when "bouh bouh" is input', function(){
    expect(wordOrder('bouh bouh')).to.equal('bouh');
  });

  it('will return "bouh" when "bouh bouh" is input', function(){
    expect(wordOrder('the quick brown fox jumps over the lazy dog')).to.equal('the quick brown fox jumps over lazy dog');
  });


});
