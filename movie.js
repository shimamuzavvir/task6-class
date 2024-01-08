// a.) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
//a String representing the studio, and a String representing the rating as its arguments, and sets the respective
// class properties to these values.

// b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  // c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of 
  //only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

  static getPG(movies) {
    let pgmovies = [];

    for (let movie of movies) {
      if (movie.rating === "PG-13") {
        pgmovies.push(movie);
      }
    }
    return pgmovies;
  }
}

//   d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
// the studio “Eon Productions”, and the rating “PG­13”

const casinomovie = new Movie("Casino Royale", "Eon Productions", "PG-13");

console.log(casinomovie);


// Using the getPG method below

const picture = Movie.getPG([
  { title: "Indian", studio: "Lyca", rating: "U/A" },
  { title: "The greatest of all time", studio: "ags", rating: "PG-13" },
  { title: "Vikram", studio: "RKF", rating: "PG-13" },
  { title: "leo", studio: "7screen", rating: "U/A" },
  { title: "Beast", studio: "sun", rating: "PG-13" },
]);
console.log(picture);
