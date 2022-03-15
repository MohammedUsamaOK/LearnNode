
var fs = require('fs');


// FOR CREATING FILE.................................
// fs.open('demo1.txt','w',function(err,file){
//     if(err) throw err;
//     console.log('File Created Successfully.');
// });

// APPEND TEXT IN FILE AND .writeFile is Used to Write Text in FILE............................
// fs.appendFile('demo1.txt','Appending in Demo1 File Text By Appednd Method.',function(err){
//     if(err) throw(err);
//     console.log('File Writing Success.')
// });

// READ FILE Retrive Data From File And Show in String Format use utf-8................................
// fs.readFile('demo1.txt','utf-8',function(err,data){
//     if(err)throw err;
//     console.log(data);
// })

// FOR Deleting FIles ...............................
// fs.unlink('demo1.txt',function(err){
//     if(err) throw err;
//     console.log('Deleted Successfully')
// })