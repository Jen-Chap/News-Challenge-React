import { useParams } from "react-router-dom";

const ArticleText = props => {
    const { data } = props.data
    const { id } = useParams();

    const article = () => {
        const articles = data.map((article) => (article[2]))
        return (
            <article className={`article${+id}`}>{articles[+id - 1]}</article>)
    };

    return (
        <>
            {data.length === 0 && <h1>Article loading...</h1>}
            {data.length > 0 && article()}
        </>
    )
}

export default ArticleText