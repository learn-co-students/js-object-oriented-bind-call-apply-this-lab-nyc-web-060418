//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, argument) {
  return fn.call(thisValue, argument);
}

function setThisWithApply(fn, thisValue, argArr) {
  return fn.apply(thisValue, argArr);
}

function returnNewFunctionOf(newFn, thisValue) {
  const clone = newFn.bind(thisValue);
  return clone;
}
