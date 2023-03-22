import { useParams } from "react-router-dom";

const Image = props => {
    const { data } = props.data
    const { id } = useParams();

    const articlePage = () => {
        let images = data.map((article) => (article[1]));
        return (
            < img src={images[id - 1]} alt="article image" className={`article${id}`} />
        )
    }

    const homepage = () => {
        return data.map((article, index) => (
            < img src={article[1]} alt="article image" className={`article${index + 1}`} key={index + 1} />

        ))
    }

    const pageType = () => {
        let image = (id != undefined) ? articlePage() : homepage();
        return image
    }

    return (
        <>
            {data.length === 0 && <h1>Image loading... </h1>}
            {data.length > 0 && pageType()}
            <br />
        </>)
}

export default Image