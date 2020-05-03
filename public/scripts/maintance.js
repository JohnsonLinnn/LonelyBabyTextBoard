

var wat = database.ref('/2020-05-21/').once('value').then(function (snapshot){
    
        wat= snapshot.val();
        
        for (var key in wat) {
            console.log(key);
        }
    });  


