import Image from '../Image/Image';
import Headline from '../Headline/Headline'
import ArticleText from "../ArticleText/ArticleText";
import { useEffect } from 'react';

const ArticlePage = props => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Image data={props} />
            <Headline data={props} />
            <ArticleText data={props} />
        </>
    )
}

export default ArticlePage