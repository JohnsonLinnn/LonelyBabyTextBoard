let textArray=[] ; 
let createJSTextArray=[] ; 


//getting all the string on the database;
db.collection('submitText').onSnapshot(snapshot=>{
loadText(snapshot.docs);
})
const loadText =(data) =>{
    let  counter=0;
    data.forEach(element => {
        const texts = element.data();
        textArray[counter]=texts.content;
        counter++;
    });
    draw();


}

function draw() {
    console.log("function draw is fired");
    var stage = new createjs.Stage("demoCanvas");
        for(let i=0;i<textArray.length;i++){
            createJSTextArray[i] = new createjs.Text(textArray[i], "20px Arial", "#ff7700");
            createJSTextArray[i].x=100;
            createJSTextArray[i].y=100*[i];
            stage.addChild(createJSTextArray[i]);
        }
    stage.update();
  }

