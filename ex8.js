const nums = []
let n = window.prompt()
for(let i=0;i<n;i++){
    nums.push(window.prompt())
}
let nb =0
let i=0
while(i<n){
    if(nums[i]== 0){
        nums.splice(i,1);
        nb++
    }
    else 
    i++
}
while(nb--)
nums.push(0)
console.log(nums)