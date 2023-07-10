const Queue = require("../lib/queue");
/* If graph is empty (has no keys), return false.

If startUser is equal to endUser, return true.

Initialize a new array, enqueued, that contains startUser.

Initialize a new empty queue named discovered.

Enqueue startUser.

While discovered isn't empty, do the following:

Dequeue a value from discovered and name it user.

For each friend followedUser in graph[user], do the following:

If followedUser is equal to endUser, return true.

If enqueued doesn't include followedUser, do the following:

Add followedUser to enqueued.

Enqueue friend to discovered.

Return false. */
const connected = (G, s, r) => {
    if(Object.keys(G).length===0){
        return false
    }
    if(s===r){
        return true
    }
        let enqueued = [s]
        let discovered= new Queue()
        discovered.enqueue(s)
        while(discovered.first){
            let user = discovered.dequeue()
            for(let item of G[user]){
                if(item===r){
                    return true
                }else{
                    if(!enqueued.includes(item)){
                        enqueued.push(item)
                        discovered.enqueue(item)
                    }
                }
            }
        }

    return false
};

module.exports = connected;
