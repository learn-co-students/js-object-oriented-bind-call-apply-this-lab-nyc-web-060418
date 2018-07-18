//Your code here

function justInvoke(func){return func()}

function setThisWithCall(func, obj, value){return func.call(obj, value)}

function setThisWithApply(func, obj, values){return func.apply(obj, values)}

function returnNewFunctionOf(func, obj){return func.bind(obj)}
