process.stdout.write('hello from spinner1.js... \rheyyy\n');
// \r brings the cursor back to the begining and \n creates a newline

setTimeout(() =>{
  process.stdout.write('\r|  ')
}, 100)

setTimeout(() =>{
  process.stdout.write('\r\  ')
}, 300)

setTimeout(() =>{
  process.stdout.write('\r-  ')
}, 500)

setTimeout(() =>{
  process.stdout.write('\r/  ')
}, 700)

setTimeout(() =>{
  process.stdout.write('\r|  ')
}, 900)