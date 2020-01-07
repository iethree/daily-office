# Daily Office

This project is a query-able wrapper for Reuben Lillie's excellent [JSON Daily Office Lectionary](https://github.com/reubenlillie/daily-office)

## NPM Package API

Simply submit mongoDB stye queries to receive one or more matching daily lectionary entries. 

Everything returns a promise.

```javascript
const lectionary = require('daily-office-lectionary');

lectionary.get({year: "Year One", day: 'Dec 25'}).then(result=>{
   console.log(result);
   /*{
   year: 'Year One',
   season: 'Christmas',
   week: 'Christmas Day and Following',
   day: 'Dec 25',
   title: 'The Nativity of Our Lord Jesus Christ: Christmas Day',
   psalms: { 
      morning: [ '2', '85' ], 
      evening: [ '110:1–5(6–7)', '132' ] },
   lessons: {
      first: 'Zech 2:10–13',
      second: '1 John 4:7–16',
      gospel: 'John 3:31–36'
   },
   _id: '6UcpQxKk2WoSRDrt'
   }*/
});

lectionary.getMany({title: 'The First Sunday After Pentecost: Trinity Sunday'}).then(result=>{
   console.log(result);
   /*[{
     year: 'Year One',
     season: 'The Season after Pentecost',
     day: 'Sunday',
     title: 'The First Sunday after Pentecost: Trinity Sunday',
     psalms: { 
        morning: [ '146', '147' ], 
        evening: [ '111', '112', '113' ] },
     lessons: {
       first: 'Sir 43:1–12(27–33)',
       second: 'Eph 4:1–16',
       gospel: 'John 1:1–18'
     },
     _id: 'ok5pDjyEID3xeMBS'
   },
   {
      year: 'Year Two',
      season: 'The Season after Pentecost',
      day: 'Sunday',
      title: 'The First Sunday after Pentecost: Trinity Sunday',
      psalms: { 
         morning: [ '146', '147' ], 
         evening: [ '111', '112', '113' ] },
      lessons: {
         first: 'Job 38:1–11; 42:1–5',
         second: 'Rev 19:4–16',
         gospel: 'John 1:29–34'
      },
      _id: 'T5BQFjjKveoa62yb'
   }]*/
});

```

## License


All code and documenation for this project is licensed under the MIT License. See the [LICENSE.md](https://github.com/reubenlillie/daily-office/blob/master/LICENSE) file for details.

The Book of Common Prayer is not and never has been under copyright. The Episcopal Church first ratified the BCP in 1789 and last certified it in 2007.
