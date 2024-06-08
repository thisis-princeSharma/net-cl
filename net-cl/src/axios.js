import axios from "axios";

// base url to make requests to the movie database

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3"
});
//instance.get('/foo-bar');
//It will make it look like this https://api.themoviedb.org/3/foo-bar => It adds the things to the end.

export default instance;