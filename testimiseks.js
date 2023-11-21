let nrOfNames = (process.argv).length - 2
let res = process.argv.splice(2, nrOfNames);

console.log(res.join(" "));