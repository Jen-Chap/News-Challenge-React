import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import Headline from "./Headline.jsx";
import { expect, jest, test } from '@jest/globals';

describe('Headline Tests', () => {
    describe('Headline rendering tests', () => {
        test('Shows "Headline loading..." when length of data is 0', () => {
            render(<Headline data={{ data: [] }} />);
            expect(screen.getByText(/headline loading.../i)).toBeInTheDocument();
        });

        test('Shows 2 headlines when length of data is 2 and id undefined', () => {
            render(<Router><Headline data={{ data: [['Headline1'], ['Headline 2']] }} /></Router>);
            const numOfHeadlines = screen.getAllByRole(`heading`, { level: 1 });
            expect(numOfHeadlines.length).toBe(2);
        });

        // I tried to write tests that would replicate the useparams hook, however i wasn't able to mock this and the below is a combination of the 1000000x methods i tried
        //  test('Shows 1 headline when length of data is 2 and id equals 1', () => {
        //     jest.mock('react-router-dom', () => ({
        //         ...jest.requireActual('react-router-dom'),
        //         useParams: jest.fn()
        //         // useParams: () => ({ id: '1' })
        //     }));
        //     // jest.fn().mockReturnValue({ id: '1' }),
        //     jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' });
        //     render(<Router><Headline data={[['Headline1'], ['Headline 2']]} /></Router>);
        //     // expect(useParams).toBe(1);
        //     const numOfHeadlines = screen.getAllByRole(`heading`, { level: 1 });
        //     expect(numOfHeadlines.length).toBe(1);
        // });

    })
})