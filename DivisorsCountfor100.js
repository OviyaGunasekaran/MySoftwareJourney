var num = 1
var count = 0
console.log("Divisors of 100-count")
while(num<=100)
{
  if(100%num==0)
  { count++
  console.log("100 is divisble by "+num)
  }
num++
}

if(num==101)
{
console.log("Number of divisors of 100 are "+count)
}

