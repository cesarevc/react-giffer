
const apiKey = 'aMK8TAK6uHn4107aQopfuUJ2iCdgb8D6'



function getGifs({keyword = 'morty'} = {}) {

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`;

    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response;

      if(Array.isArray(data)) {
        
        const gifs = data.map(data => {
            const {images, title, id} = data;
            const {url} = images.downsized_medium;
            return {title, id, url};
        });
        return gifs;

      }
    })
    .catch( err => console.log(err))
}

export default getGifs;