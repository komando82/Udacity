/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Ivan",
    friends: 3,
    messages: ["Message1", "Message2", "Message3"],
    postMessage: function(message) {
        this.messages.push(message);
    },
    deleteMessage: function(index) {
        this.messages.splice(index, 1);
    },
    addFriend: function() {
        this.friends += 1;
    },
    removeFriend: function() {
        this.friends -= 1;
    }
}

