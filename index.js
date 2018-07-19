//Your code here
function justInvoke(fn){
  return fn(this)
}

function setThisWithCall(fn, bob, num) {
  return fn.call(bob, num)
}

function setThisWithApply(fn, bob, [age, hairColor]) {
  return fn.apply(bob, [age, hairColor])
}

function returnNewFunctionOf(fnCopy, fred){
  return fnCopy.bind(fred)
}
