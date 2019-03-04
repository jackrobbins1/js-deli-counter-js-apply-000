function takeANumber(arr, name){
  arr.pop(name);
  return `Welcome, ${name}. You are number ${arr.length + 1} in line.`
}
