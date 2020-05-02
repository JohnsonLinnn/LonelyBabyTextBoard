database.ref('/2020-05-21/').once('value',function (snapshot){
    snapshot.forEach(function(child) {
        console.log(child.val())
         // NOW THE CHILDREN PRINT IN ORDER
    });  
})