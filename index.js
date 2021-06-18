function largestSubarraySum(array) {
    // var maxint = Math.pow(2, 53)
    var max_so_far = array[0]
    var max_ending_here = 0
      
    for (var i = 0; i < array.length ; i++)
    {
        max_ending_here = max_ending_here + array[i]
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here
 
        if (max_ending_here < 0)
            max_ending_here = 0
    }
    
    if (max_so_far > 0) {
        return max_so_far
    } else {
        return 0
    }

}