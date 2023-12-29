export const exerciseOptions = {
    method: 'GET',
    params: { limit: '10' },
    headers: {
        'X-RapidAPI-Key': '3f67c27167mshe43c45cdcada3b3p1a7451jsn1929e31fedfa',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}