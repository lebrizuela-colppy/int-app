
export const loadMovies = async () => {
    fetch("https://ia-cms.herokuapp.com/api/v1/public/films")
        .then((res) => res.json())
        .then((data) => console.log(data));
}

export const _fetch = async function (url, action, token, body) {
  
  const options = {
    method: action,
    body: body,
    headers: {
      'x-access-token': token
    },
  };
  return fetch(url, options);
};



