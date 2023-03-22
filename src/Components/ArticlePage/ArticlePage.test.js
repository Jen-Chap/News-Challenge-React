import ArticlePage from "./ArticlePage";
import { render, screen } from "@testing-library/react";

describe('ArticlePage tests', () => {
    test('Scrolls to top of page when rendered', () => {
        const scrollToSpy = jest.fn();
        global.scrollTo = scrollToSpy;
        render(<ArticlePage data={[]} />);
        expect(scrollToSpy).toHaveBeenCalled();
    })
})