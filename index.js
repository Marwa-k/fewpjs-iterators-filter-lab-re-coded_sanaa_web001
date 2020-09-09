// Code your solution here
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
  
  //const
function findMatching(drivers)
{
  drivers.filter(n => {
 return n ;
});
}


  const drivers = []

  //const
  function findMatching(arr,find)
  {
    return arr.filter(el => el.toLowerCase().indexOf(find.toLowerCase()) !== -1)
  }
//console.log(findMatching(drivers, 'Bobby'))
function fuzzyMatch(drivers, regexp) {

  drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
  return drivers.filter(function (word) {
       return regexp.test(word);
  });
}

console.log(fuzzyMatch(drivers, /^An/));