
//At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:

require("dotenv").config();

//Make it so liri.js can take in one of node the following commands:

//command node liri.js concert-this <artist/band name here>
var axios = require("axios");

const concertThis = function (user_input){

  var queryBandsInTownUrl = "https://rest.bandsintown.com/artists/" + user_input + "/events?app_id=codingbootcamp"
  
  axios.get(queryBandsInTownUrl).then(
  function(response) {
   var concert = response.data 
    if (!concert.length){
      console.log ("There's no results of "+ user_input + "!")

    }else{
    console.log ("Here's upcoming concerts of "+ user_input + "!")
  
  for (i=0; i<concert.length;i++){
  console.log(i)
  //Name of the venue
  console.log(concert[i].venue.name)
  
  //Venue location
  console.log(concert[i].venue.city)
  //Date of the Event (use moment to format this as "MM/DD/YYYY")

  console.log(concert[i].datetime)
  console.log("------------------")
}
}
});
};

//Run this code if command is Spotify-this-song '<song name here>'
const spotifyThisSong = function(user_input){

//Add the code required to import the keys.js file and store it in a variable.
var key = require("./key.js");

//You should then be able to access your keys information like so
var Spotify = require("node-spotify-api");
 spotify = new Spotify(key.spotify);


 // main spotify function
  if (!user_input){
    user_input = "The Sign";
  }

  spotify.search({
    type: "track",
    query: user_input
  },
  function(err, data){
    if(err){
      console.log("Error: "+err);
      return;
    }

    var song = data.tracks.items;
    //console.log("Data: "+song);

    for(let i=0;i<song.length;i++){
      console.log(i)
      //Artist(s)
      console.log("artist(s): "+ song[i].artists);
      //The song's name
      console.log("The song's name: "+song[i].name);
      //A preview link of the song from Spotify
      console.log("A preview link of the song from Spotify: "+song[i].preview_url);
      //The album that the song is from
      console.log("The album that the song is from : "+song[i].album.name);
      console.log("------------------")
    }
  }
  )
}

//command movie-this '<movie name here>'

const movieThis = function (user_input){

  //If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
   if (!user_input){
    user_input= "Mr. Nobody"
  }

var queryOMDbUrl = "http://www.omdbapi.com/?apikey=trilogy&t="+user_input+"&type=movie&y=&plot=full&tomatoes=true&r=json";

axios.get(queryOMDbUrl).then(
  function(response) {
   var movie = response.data;
   console.log("--------------------")
    console.log("Here's the information of "+user_input+"!");

    console.log("* Title of the movie: "+movie.Title);
    console.log("* Year the movie came out: "+movie.Year);
    console.log("* IMDB Rating of the movie: "+movie.imdbRating);
    console.log("* Rotten Tomatoes Rating of the movie: "+movie.Ratings[1].Value);
    console.log("* Country where the movie was produced: "+movie.Country);
    console.log("* Language of the movie:"+movie.Language);
    console.log("* Plot of the movie: "+movie.Plot);
    console.log("* Actors in the movie: "+movie.Actors);
    console.log("--------------------")
  
});

}

//command node liri.js do-what-it-says

//Using the fs Node package, 
var fs = require("fs");
//LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

function doWhatItSays () {

fs.readFile("random.txt", "utf8", function(err, data) {
  if (err) {
    return console.log("Error: "+err);
  }
  //console.log(data);

  var dataArr = data.split(",");
  console.log(dataArr);

  runFunction (dataArr[0],dataArr[1])

});

}
// 

const runFunction = function(caseData, functionData) {
  switch (caseData) {
    case 'concert-this':
      concertThis(functionData);
      break;
    case 'spotify-this-song':
    spotifyThisSong(functionData);
      break;
    case 'movie-this':
      movieThis(functionData);
      break;
    case 'do-what-it-says':
      doWhatItSays();
      break;
    default:
      console.log("Sorry, I don't understand.");
  }
};


// start to run all the code
const start = function(a,u){
  runFunction(a,u)
}

start (process.argv[2],process.argv.slice(3).join(" "));
//const action = process.argv[2];
//const user_input = process.argv.slice(3).join(" ");
