
    function maxArea(A, len)
    {
        let area = 0;
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                area = Math.max(area, Math.min(A[j], A[i]) * (j - i));
            }
        }
        return area;
    }
 
      let height =[1,8,6,2,5,4,8,3,7];
  
    let len1 = height.length;
    document.write(maxArea(height, len1) + "</br>");