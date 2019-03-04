function takeANumber(arr, name){
  arr.pop(name);
  return `Welcome, ${name}. You are number ${arr.length + 1} in line.`
}

function nowServing(arr) {
  if (arr === []) {
    return `There is nobody waiting to be served!`;
  } else {
    return arr.shift();
  }

}

function currentLine(arr) {
  let x = 'The line is currently: ';

  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      x += `${i+1}. ${arr[i]},`
    }
  }


  if (arr.length === 0) {
    x = `The line is currently empty.`;
  }

  return x;
}
