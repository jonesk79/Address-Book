def primesifting(n)
  prime = 2
  calc = (2..n).to_a
  until prime >= n
    calc.each do |number|
      if (number > prime) && (number % prime == 0)
        calc.delete(number)
      end
    end
    prime +=1
  end
  calc
end

puts primesifting(17)
