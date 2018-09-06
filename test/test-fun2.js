var name = "global";
var oo = {
  name: "oo",
  getNameFunc: function(){
    return function(){
      return this.name;
    };
  }
}
console.log(oo.getNameFunc()());

