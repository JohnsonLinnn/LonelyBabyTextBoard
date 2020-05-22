const guideList = document.querySelector('.guides');
var texts=[];
var isSvg =false;

db.collection('submitedText').onSnapshot(snapshot => {
    loadText(snapshot.docs);
})

const loadText = (data) => {
    if (data.length) {
      let html = '';
      data.forEach(doc => {
        const guide = doc.data();
        const li = `
          <li>
            <div class="collapsible-header grey lighten-4"> ${guide.word}  </div>
            <label for="fname">size:</label>
            <input type="text"  value= ${guide.size}></input><br><br>
            <button>delete</button><button>Change</button>
          </li>
        `; 
        html += li;
      });
      guideList.innerHTML = html
    } else {
        //if there were no data to log
      guideList.innerHTML = '<h5 class="center-align"></h5>';
    }
  };