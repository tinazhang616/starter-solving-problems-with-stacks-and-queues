const Queue = require("../lib/queue");

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
