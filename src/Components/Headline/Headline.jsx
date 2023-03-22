import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";


const Headline = props => {
    const { data } = props.data
    const { id } = useParams();

    const articlePage = () => {
        let headlines = data.map((article) => (article[0]));
        return (
            <h1 key={id} className={`article${id}`}>
                {headlines[id - 1]}
            </h1>)
    }

    const homepage = () => {
        return data.map((article, index) => (
            <h1 key={index + 1} className={`article${index + 1}`}>
                <NavLink to={`/article/${index + 1}`}>{article[0]}</NavLink>
            </h1>
        ));
    }

    const pageType = () => {
        let headline = (id != undefined) ? articlePage() : homepage();
        return headline
    }

    return (
        <>
            {data.length === 0 && <h1>Headline loading... </h1>}
            {data.length > 0 && pageType()}

        </>
    )
}

export default Headline