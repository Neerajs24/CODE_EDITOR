let output = document.querySelector("#output");
let allInput=document.querySelectorAll(".leftPart textarea")

let htmlCode,cssCode, jsCode ='';
allInput.forEach((el,index)=>{
    el.addEventListener("keyup", ()=>{
        if(index==0){
           htmlCode=el.value;
        }
        if(index==1){
           cssCode=el.value;
        }
        if(index==2){
           jsCode=el.value;
        }

        output.contentDocument.body.innerHTML=htmlCode;

        output.contentDocument.head.innerHTML=`<style>${cssCode}</style>`;

        output.contentWindow.eval(jsCode);

        
    })
})

// output.contentDocument.head.innerHTML="<h1> My name is neeraj kasera</h1>"

// output.contentDocument.head.innerHTML="<style> h1{color:red}</style>"

// output.contentWindow.eval('let a = 10; let b = 20; alert(a+b)')