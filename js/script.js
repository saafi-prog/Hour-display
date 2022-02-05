
const CONTENT = document.querySelector('#content');

function updateTime (){
   
    setInterval(function changecolfo(){
        let d = new Date();
        let time = d.toLocaleTimeString("fr");
        CONTENT.innerText = time;
        let second = d.getSeconds();
        if (second%3===0){
        /*let el= document.styleSheets;
       console.log (el);
       el.StyleSheetList[1].cssRules[0].cssText=".para { color: red; font-weight:bold; }";
       
      let text= document.querySelector('.para');*/
      CONTENT.setAttribute('class','para');
    }else CONTENT.removeAttribute('class','para');
    
    }, 1000);  
  
}


window.addEventListener('load', updateTime());