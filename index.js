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

function currentLine(arr) {
  let x = 'The line is currently';
  
  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      x += 
    }  
  }

  
  if (arr.length === 0) {
    x = `The line is currently empty.`;
  }

  return x;
}