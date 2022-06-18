const a = []
const b = []
let len = window.prompt()
for(let i=0;i<len;i++){
    a.push(window.prompt())
}
for(let i=0;i<len;i++){
    b.push(window.prompt())
}
const res = []
for(let i=0;i<len;i++){
    if(a[i] == b[i]){
        res.push(i)
        res.push(i)
    }
}
console.log(res)