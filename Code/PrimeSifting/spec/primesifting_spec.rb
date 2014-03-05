require ('rspec')
require ('primesifting')

describe('primesifting') do
  it('eliminates the multiples of the first prime') do
    primesifting(9).should(eq([3,5,7,9]))
  end
end
