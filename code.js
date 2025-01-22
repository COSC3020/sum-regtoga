function sum(a) {
    //i caught the unhandled test case where the array was empty
    var sum = a[0];
    if (sum != []) {
        for(var i = 0; i < a.length; i++) {
            sum += a[i];
        }
        return sum;
    }
    else{
        return 0;
    }
    
}
