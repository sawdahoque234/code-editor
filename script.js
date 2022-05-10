    let htmlcode=document.querySelector('.html-code textarea')
let csscode=document.querySelector('.css-code textarea')
let jscode=document.querySelector('.js-code textarea')
let output=document.querySelector('#output')
             
function run(){
    localStorage.setItem('htmlcode',htmlcode.value)
    localStorage.setItem('csscode',csscode.value)
    localStorage.setItem('jscode',jscode.value)
    output.contentDocument.body.innerHTML=`<style>${csscode.value}</style>`+htmlcode.value
    output.contentWindow.eval(localStorage.jscode)
}
htmlcode.onkeyup=()=>run()
csscode.onkeyup=()=>run()
jscode.onkeyup=()=>run()

htmlcode.value=localStorage.htmlcode
csscode.value=localStorage.csscode
jscode.value=localStorage.jscode
