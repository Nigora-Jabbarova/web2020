let promise = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("require participants' list" );
        console.log('....................................');

        if(true === 1){
            reject('Error, user is not found')
        }
    
        resolve([1,2,3])
    }, 1000);
    
})

promise.then(function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            var users = [
                {
                    uID: 'id1',
                    name: 'nigora'
                },
                {
                    uID: 'id1',
                    name: 'izabel'
                }
            ];
            console.log("Datbase is forming partisipants' list");
            console.log('....................................');
            resolve(users);
            console.log(users);
        },1000);
    })
})
.then(function(DBUsers){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("transforing participants' list");
            console.log('....................................');
            var users = DBUsers.map(function(user){
                return {
                    id: user.uID,
                    firstName: user.name,
                    timeStep: new Date(),
                }
                
            })
            resolve(users);
        }, 1000);
    })
})
.then(function(users){
    setTimeout(function(){
        console.log("client: accepted participants' list");
        console.log('....................................');
        //console.log(users);
    },1000);
})
.catch(function(error){
    console.log(error);
})
/*.finally(function(){
    console.log('finally is working');
    console.log('....................................'); 
});*/