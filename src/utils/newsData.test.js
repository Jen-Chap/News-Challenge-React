import axiosMock from 'axios';
import { getNewsDataAsync, extractData } from "./newsData";
import testData from '../../mockNewsData.json'

jest.mock(`axios`);

describe('newsData tests', () => {
    describe('getNewsDataAsync tests', () => {

        test('calls the external data link via axios', () => {
            const data = { data: [{ headline: `headline1`, thumbnail: 'image1', article: 'article1' }] };
            axiosMock.get.mockResolvedValueOnce(testData);
            getNewsDataAsync();
            expect(axiosMock.get).toHaveBeenCalledWith(`http://localhost:4000/response`);
        });
        test('if not data returned, getNewsDataAsync returns an error object', async () => {
            const error = { error: `Error` };
            axiosMock.get.mockRejectedValueOnce(error)
            expect(await getNewsDataAsync()).toEqual(error);
        });

    })
    describe('extractData tests', () => {
        test('returns an array with length of 3', () => {
            const result = extractData(testData.response.results)
            expect(result.length).toBe(3);

        });
    })
})