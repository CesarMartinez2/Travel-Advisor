import axios from 'axios';

// placeholder : Central Houston Locations

const options = {
    params: {
        bl_latitude: '29.65',
        tr_latitude: '29.85',
        bl_longitude: '-95.39',
        tr_longitude: '-95.19',
    },
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    }
};

export const getPlacesData = async (type) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, options);

        return data;
    } catch (error) {
        console.log(error)
    }
}