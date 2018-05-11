function theBeatlesPlay(musicians, instruments) {
  let a = [] 
  for (let i = 1; i < musicians.length; i++) {
    a.push(musicians[i] + " plays " + instruments[i])
  }
  return a;
}