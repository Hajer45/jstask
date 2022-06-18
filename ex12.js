const l1 = []
const l2 = []
let len = window.prompt()
for(let i=0;i<len;i++){
    l1.push(window.prompt())
}
for(let i=0;i<len;i++){
    l2.push(window.prompt())
}
l1.reverse()
l2.reverse()
let ch = l1.join("")
let ch1 = l2.join("")
let res = parseInt(ch) + parseInt(ch1)
const l =[]
while(res != 0){
    l.push(res  % 10)
    res = res /10
} 
console.log(res)