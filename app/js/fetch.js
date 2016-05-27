"use strict"

require('isomorphic-fetch')

var fs = require('mz/fs'),
    echo = (...args)=>console.log.apply(console,args)


var url = "http://api.randomuser.me"

async function getUser(){
  try {
    return (await (await fetch(url)).json()).results[0]
  } 
  catch(err){echo(err)}
}

getUser().then(user=> echo(user))

// function getUser(){
//   return fetch(url)
//     .then((response)=> {
//       return response.json()
//     })
//     .then((response)=>{
//       return response.results[0]
//     })
// }
//
//
// getUser()
//   .then((response)=>{
//     echo(response)
//   })
