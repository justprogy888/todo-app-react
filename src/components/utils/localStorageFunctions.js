function getLocalStorage(key){
    if (localStorage.getItem(key) != undefined && localStorage.getItem(key) != ""){
        return JSON.parse(localStorage.getItem(key))
    }else{
        return []
    }
    
}
function setLocalStorage(key,val){
    localStorage.setItem(key,JSON.stringify(val))
}
export {setLocalStorage,getLocalStorage}