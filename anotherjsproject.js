function repeater(message,counter){
    let messagetoshow = message
    for(let i=0; i < counter; i++){
        messagetoshow +=message;
    }

    return messagetoshow;
}

// console.log(repeater("hello",3))


//to be able to test must export the function
module.exports = {
     repeater
}