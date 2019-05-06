# liri-node-app

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

![image_liri.js](liri_js_ss.gif);

## There're 4 different commands:

* `node liri.js concert-this <artist/band name here>`
   search for your favourite artist's upcoming concerts and shows!

* `node liri.js spotify-this-song <song name here>`
   search for music by any keywords, if no words has been inputed, Liri will default to "The Sign" .

* `node liri.js movie-this <movie name here>`
   search for movie. Liri will show you the IMDb rating, Rotten Tomatoes Rating , actors, year, country, language and full plot of the movie. 

   If no movie name, liri will output information of a movie called "Mr. Nobody".

* `node liri.js do-what-it-says`
   try it!
   Liri will do whatever writes on random.txt.

**Node.js**
**npm packages**:  
    * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

     * [OMDb API](http://www.omdbapi.com) 
     
     * [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)