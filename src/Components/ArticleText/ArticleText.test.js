import { render, screen } from "@testing-library/react";
import ArticleText from "./ArticleText";
import { expect, jest, test } from '@jest/globals';

describe('Article text Tests', () => {
    describe('Article text rendering tests', () => {
        test('Shows "Article loading..." when length of data is 0', () => {
            render(<ArticleText data={{ data: [] }} />);
            expect(screen.getByText(/article loading.../i)).toBeInTheDocument();
        });

        test('Shows an article when data length is 1', () => {
            render(<ArticleText data={{ data: [['article1']] }} />);
            const numOfArticles = screen.getAllByRole(`article`);
            expect(numOfArticles.length).toBe(1);
        });
    })
})