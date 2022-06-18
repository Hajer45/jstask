const nums = []
let n = window.prompt()
for(let i=0;i<n;i++){
    nums.push(window.prompt())
}
let target = window.prompt()
const res =[]
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(nums[i]+nums[j]==target){
            res.push(nums[i])
            res.push(nums[j])
        }
    }
}
if(res.length()!=0){
    for(let i=0;i<res.length()-1;i+=2)
    console.log("Pair found ("+res[i]+", "+res[i+1]+")")
}
else 
console.log(" Pair not found")