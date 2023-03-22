import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import * as data from './utils/newsData.js';

jest.mock(`./utils/newsData`);

describe('App component tests', () => {

    describe('getNewsData tests', () => {

        test('getNewsDataAsync is called when useEffect is called', async () => {
            const testDataResults = [['headline', 'image', 'article']]
            data.getNewsDataAsync.mockImplementation(() => testDataResults);
            render(<App />);
            await waitFor(() => expect(data.getNewsDataAsync).toHaveBeenCalled());
        });
        test('if there is an error when retrieving data,there is an error message on screen', async () => {
            const testDataResults = { error: `Error` }
            data.getNewsDataAsync.mockImplementation(() => testDataResults);
            render(<App />);
            const errorFound = await screen.findByText(/Error: Data cannot be found/i, { exact: false })
            expect(errorFound).toBeInTheDocument();
        });

    })
})