let nums = []
let n = window.prompt()
for(let i=0;i<n;i++){
    nums.push(window.prompt())
}
let target = window.prompt()
for(let i=0;i<n;i++){
    if(target == nums[i]){
        console.log( "target found in index " +i)
        break
    }
}