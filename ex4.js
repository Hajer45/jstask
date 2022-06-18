let n = window.prompt()
let arr = []
for(let i=0;i<n;i++){
    arr.push(window.prompt())
}
for(let i=0;i<n;i++){
    for(let j=j+1;j<n;j++){
        if(arr[i]== arr[j])
        console.log("The duplicate element is "+arr[i])
        break
    }
}