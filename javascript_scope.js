// type scope
// local scope & global scope

// global scope
// scope yang ada di luar function

const globalScope = "Sangkala global";


// local scope
// scope yang ada di dalam function

function functionLocalScope() {
    const localScope = "Sangkala local";

    function nestFunction () {
        console.log(localScope)

    }
    nestFunction()
}

functionLocalScope()