import Image from '../Image/Image';
import Headline from '../Headline/Headline'

const HomePage = props => {
    return (
        <>
            <Image data={props} />
            <Headline data={props} />
        </>
    )
}
export default HomePage;