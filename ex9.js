const nums = []
let len = window.prompt()
for(let i=0;i<len;i++){
    nums.push(window.prompt())
}
let n = window.prompt()
while(n--){
    nums.push(nums[0])
    nums.shift()
}
console.log(nums)