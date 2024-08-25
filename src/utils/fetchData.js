//connection with RapidAPI. Went to RapidAPI and copied the code snippet for Node.js client Axios and added it here. The keys were saved into .env file for security. 

export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/status',
    headers: {
      'x-rapidapi-key': 'b3c34d4a8fmsh8373a96fd7af9e5p107d36jsn98fee58e23ff',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
    
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}