import { render, screen } from "@testing-library/react";
import Image from "./Image.jsx"

describe('Image Tests', () => {
    describe('Image rendering tests', () => {
        test('Shows "Image loading..." when length of data is 0', () => {
            render(<Image data={{ data: [] }} />);
            expect(screen.getByText(/Image loading.../i)).toBeInTheDocument();
        });

        test('Shows 2 alt text (and therefore images) when length of data is 2 and id undefined', () => {
            render(<Image data={{ data: [['Headline1', 'imageLink1'], ['Headline 2', 'imageLink2']] }} />);
            const numOfImages = screen.getAllByAltText(/article image/i)
            expect(numOfImages.length).toBe(2);
        });

    })
})