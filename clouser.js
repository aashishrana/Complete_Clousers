function outerFunc() {
    let outervar = "i am at scope level 1";

    function innerFunc() {
        let innerval = "i am at scope level 2";
        console.log(outervar)
    }

     innerFunc();

}

outerFunc();








