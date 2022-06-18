let s = window.prompt()
let ch = s.substr(5,2)
let c = s.substr(0,2)
c=parseInt(c)
let res =""
if(ch == "PM"){
    c+=12
    c = c % 24
    if(c/10 == 0){
        res = c +"0:"+s.substr(3,2)
    }
    else{
        res = c+s.substr(2,3)
    }
}
else
    res = c +s.substr(2,3)
console.log(res)