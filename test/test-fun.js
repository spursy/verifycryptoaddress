var name = "spursyy";
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        // alert(name);
        console.log(name);
        
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();


