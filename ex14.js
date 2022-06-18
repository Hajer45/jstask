function minJumps(arr, n)
{
    if (n == 1)
        return 0;
    let res = Number.MAX_VALUE;
    for (let i = n - 2; i >= 0; i--) {
        if (i + arr[i] >= n - 1) {
            let sub_res = minJumps(arr, i + 1);
            if (sub_res != Number.MAX_VALUE)
                res = Math.min(res, sub_res + 1);
        }
    }
 
    return res;
}
 
    let nums = [2,3,1,1,4]
    let n = nums.length;
    console.log(minJumps(nums, n));