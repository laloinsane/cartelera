this.addEventListener('install', function(event){
    event.waitUntil(swInstalled);
})

function swInstalled(){
    console.log("sw instalado");
}