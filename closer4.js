const myGlobalValue = 0;

function func() {
    const val1 = 1;
    console.log(myGlobalValue);

    function innerofFunc() {
        const val2 = 2;
        console.log(val2, val1, myGlobalValue);
    }

    innerofFunc();
}

func();