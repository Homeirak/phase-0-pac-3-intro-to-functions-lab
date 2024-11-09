

function shout(string) {
    return string.toUpperCase(); //receives one argument and returns it in all caps
  }
  
function whisper(string) {
    return string.toLowerCase(); //receives one argument and returns it in all lowercase
} 

function logShout(string) {
    console.log(string.toUpperCase()); //takes a string argument and logs it in all caps using console.log()
   }

function logWhisper(string) {
   console.log(string.toLowerCase()); //takes a string argument and logs it in all lower case using console.log()
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return("I can't hear you!");
    } else if (string === string.toUpperCase()) {
        return("YES INDEED!");
    } else if (string === "Let's have dinner together!") {
        return("I would love to!");
    }
}

