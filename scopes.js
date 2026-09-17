let country="India";
function outer() {
    let state = "MP";
    function inner() {
        let city = "Indore";
        console.log(city);
        console.log(state);
        console.log(country);
    }
    inner();
}
outer();
  