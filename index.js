function takeANumber(arr, name){
  arr.pop(name);
  return `Welcome, ${name}. You are number ${arr.length + 1} in line.`
}

function nowServing(arr) {
  arr.shift();

  if (arr === []) {
    return `There is nobody waiting to be served!`;
  }
}
