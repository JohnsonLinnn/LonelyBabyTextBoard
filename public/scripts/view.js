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
        setupBG();
        draw();
        
    
    
    }
function setupBG(){
    var canvas = document.getElementById("demoCanvas");
    var parent = document.getElementById("createjscontainer");
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

}

function draw() {
    console.log("function draw is fired");
    var stage = new createjs.Stage("demoCanvas");
        /*
        for(let i=0;i<textArray.length;i++){
            createJSTextArray[i] = new createjs.Text(textArray[i], "20px Arial", "#ff7700");
            createJSTextArray[i].x=100;
            createJSTextArray[i].y=100*[i];
            stage.addChild(createJSTextArray[i]);
        }
        */
        text1=new createjs.Text("I don't have friends", "20px Arial", "#ff7700");
        text2=new createjs.Text("Me to", "20px Arial", "#ff7700");
        text1.x=10;
        text1.y=10;
        text2.x=10;
        text2.y=10;
        stage.addChild(text1,text2);
    stage.update();
  }

