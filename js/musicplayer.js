// var left =document.getElementById("left");
// var playorpause =document.getElementById("playorpause");
// var right=document.getElementById("right");
// var song= document.getElementById("song");
// var progress=document.getElementById("progress");




// song.onloadedmetadata = function(){
//           progress.max = song.duration;
//           progress.value = song.currentTime;

//  }

//   function saijosh() {
//       if (playorpause.classList.Toggle("playorpause")) {
//           song.pause(); 
           
//       }

//       else{

//           song.play();
//       }
//   }    saijosh;




//  playorpause.addEventListener("click",()=>
//  {

//      if (playorpause.classList.toggle) {
//          song.pause();        
//      }
        
//      else{
//          song.play();
//      }   

//  })


var userinp = document.getElementsByClassName("userinp")
var songlist = document.querySelector(".songlist")
var audiotag = document.querySelector(".audio")
var currentsongimg = document.querySelector(".currentsongimg");

function mainfunction(event) {
    userinp[0].value = event.target.value;
    console.log(userinp[0].value);
    data();
}

function data(){
    songlist.innerHTML = "";
    console.log(userinp[0].value);
    fetch(`https://saavn.me/search/songs?query=${userinp[0].value}`).then(res => (res.json())).then(res => {
        console.log(res);
        res.data.results.map(finalresult => {
            songlist.innerHTML += `
            <img src="${finalresult.image[2].link}" name="${finalresult.name}" class="songimageinjs" alt="${finalresult.downloadUrl[4].link}" /> `;
            var a = document.querySelectorAll(".songimageinjs")
            a.forEach((c) => {
                c.addEventListener("click", (event)=> {
                    console.log(event);
                    audiotag.setAttribute("src", event.target.alt);
                    currentsongimg.src=event.target.currentSrc;
                })
            });
        })
    })
}