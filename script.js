//Class-Movie.
class Movies {
  constructor(Title, Studio, Rating) {
    this.Title = Title;
    this.Studio = Studio;
    if (Rating == undefined) {
      this.Rating = "PG";
    } else {
      this.Rating = Rating;
    }
  }
  getPG(array) {
    var res = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].Rating == "PG") {
        res.push(array[i]);
      }
    }
    return res;
  }
}
var movie1 = new Movies("Iron-man", "Marvel", "PG-13");
var movie2 = new Movies("Captain America", "Marvel");
var movie3 = new Movies("X-men", "Marvel", "PG-13");
var movie4 = new Movies("Spiderman", "Marvel");
var arr = [movie1,movie2,movie3,movie4];
console.log(movie1,movie2,movie3,movie4);
console.log(movie1.getPG(arr))

class Movie{
    constructor(title,studio,rating){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
}
var movieDetails = new Movie("Casino Royale","Eon Productions","PG­13");
console.log(movieDetails);
//--------------------------------------------------------------------------------------------------------//
//Class-Person.
class Person{
    constructor(Name,Age,Gender,Salary){
        this.Name=Name;
        this.Age=Age;
        this.Gender=Gender;
        this.Salary=Salary;
    }
}
var personDetails = new Person("SK","28","Male","80,000");
console.log(personDetails);