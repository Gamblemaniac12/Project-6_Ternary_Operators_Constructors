function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "you are too short":"you are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  const mySister = new Person("Kristine", "Gamble" , 21,"blue");
  function printMySister() {
    document.getElementById('mySister').innerHTML ="My sisters eyecolor is "  + mySister.eyeColor +".";
  }
  

  function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point =9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
  }