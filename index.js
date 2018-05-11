function theBeatlesPlay(musicians, instruments) {
  let a = [] 
  for (let i = 0; i < musicians.length; i++) {
    a.push(musicians[i] + " plays " + instruments[i])
  }
  return a;
}

function johnLennonFacts(facts) {
  
  let newFacts = []
  
  for(i = 0; i < facts.length; i++) {
    newFacts.push(facts[i] + '!!!')
  }
  return facts;
}