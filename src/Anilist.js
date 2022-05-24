import React, {useState} from 'react'

function Anilist(props) {

  const [data, setData] = useState();
  
  var query = `
query ($id: Int, $page: Int, $perPage: Int, $search: [String]) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, genre_in: $search) {
      id
      title {
        romaji
        english
        native
      }
      meanScore
    }
  }
}
`;

    var variables = {
        search: props.genre,
        page:props.page,
        perPage:20
    };

    var url = 'https://graphql.anilist.co', options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };
    // let data;
    let dataFetch = async () => {
      try {
        let res = await fetch(url, options)
        setData(await handleResponse(res))
      }catch (error) {
        console.error(error);
      }
    }
    
    
    (!data) && dataFetch();

    function handleResponse(response) {
        return response.json().then(function (json) {
            return response.ok ? json : Promise.reject(json);
        });
    }

    // return data;
  return (
    <div>
      {data && data.data.Page.media.map(anime => (
        <div key={anime.id}>
          {anime.title.romaji || anime.title.english } - {anime.meanScore}
        </div>
      ))}
    </div>
  )
}

export default Anilist

    