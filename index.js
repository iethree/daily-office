const fs = require('fs');
const nedb = require('nedb-promises');
var db = nedb.create('all-days.db')

module.exports = {get, loadAll};

async function get(query){
   try{
      let r = await db.find(query);
      if(r.length)
         return Promise.resolve(r);
      else
         throw new Error("no results found");
   } catch(e){
      return Promise.reject(e);
   }
}

async function loader(files){
   var cnt = 0;
   try{
      for (file of files){
         let data = await load(file);
         if(data){
            cnt+=data.length;
         }
      }
      return Promise.resolve(`loaded ${cnt} entries`);
   } catch(e){
      return Promise.reject(e);
   }
}

function load(file){
   return new Promise((resolve, reject)=>{
      fs.readFile(file, async (err, data)=>{
         if(!err && data){
            data = JSON.parse(data);
            console.log(`${data.length} in ${file}`)
            resolve( db.insert(data))
         }
         else
            reject(err)
      });
   })
   
}

async function loadAll(){
   await db.remove({}, {multi: true}).catch(console.log);
   loader([
      './json/readings/dol-holy-days.min.json',
      './json/readings/dol-special-occasions.min.json',
      './json/readings/dol-year-1.min.json',
      './json/readings/dol-year-2.min.json'
   ])
   .then(console.log)
   .catch(console.log);
}