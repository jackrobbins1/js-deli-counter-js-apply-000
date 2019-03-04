function takeANumber(arr, name){
  arr.push(name);
  return `Welcome, ${name}. You are number ${arr.length} in line.`
}

function nowServing(arr) {
  if (arr === []) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${arr[0]}.`;
  }

}

function currentLine(arr) {
  let x = 'The line is currently:';

  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      x += ` ${i+1}. ${arr[i]},`
    }
  }


  if (arr.length === 0) {
    x = `The line is currently empty.`;
  }

  return x;
}
