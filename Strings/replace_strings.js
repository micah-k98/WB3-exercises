"use strict"

let message = "Our corporate offices are located in Dallas";
let newMessage = message.replace("Dallas", "Austin");
let newMessageCaseInsensitive = message.replace(/DALLAS/i, "Austin");

console.log(message);
console.log("New message: " + newMessage);
console.log("New message, case insensitive: " + newMessageCaseInsensitive);