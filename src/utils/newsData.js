import axios from 'axios';

export const getNewsDataAsync = async () => {
    try {
        const responseData = await axios.get(process.env.REACT_APP_NEWS_DATA);
        const data = responseData.data.response.results;
        // const data = responseData.data.results; use instead when viewing mock data
        return extractData(data)

    }
    catch (e) {
        return { error: `Error` };
    }

}

export const extractData = (data) => {
    let articleData = [];
    for (let i = 0; i < 3; i++) {
        let headline = data[i].fields.headline;
        let thumbnail = data[i].fields.thumbnail;
        let article = data[i].fields.bodyText;
        articleData.push([headline, thumbnail, article]);
    }
    return articleData;
}