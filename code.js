function sum(a) {
    //i caught the unhandled test case where the array was empty
    //window.print(a);
    var sum = a[0];
    //console.log(a)
    if (a.length >= 1) {
        for(var i = 1; i < a.length; i++) {
            sum = a[i] + sum;
        }
        return sum;
    }
    else{
        //console.log("empty array")
        return 0;
    }
    
}

//testss
//console.log(sum([1,0]));
