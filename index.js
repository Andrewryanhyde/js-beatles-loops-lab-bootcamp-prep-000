function theBeatlesPlay(musicians, instruments) {
  let a = [] 
  for (let i = 0; i <= musicians.length; i++) {
    let b = (${musicians} + 'plays' + ${instruments})
    a.push(b)
  }
  return a
}