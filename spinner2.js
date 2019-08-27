process.stdout.write('hello from spinner1.js... \rheyyy\n');
// \r brings the cursor back to the begining and \n creates a newline
let lines = "\r| \r\ \r- \r/ \r|";
const spinner = function() {
  for(let i = 0; i < lines.length; i++) {
    setTimeout(() =>{
    process.stdout.write(lines[i])
    }, 100 * i)
  }
}  
  
//   setTimeout(() =>{
//     process.stdout.write('\r\  ')
//   }, 300)
  
//   setTimeout(() =>{
//     process.stdout.write('\r-  ')
//   }, 500)
  
//   setTimeout(() =>{
//     process.stdout.write('\r/  ')
//   }, 700)
  
//   setTimeout(() =>{
//     process.stdout.write('\r|  ')
//   }, 900)

// }
spinner();
