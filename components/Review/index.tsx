import {FC} from "react";
import styles from "./Review.module.scss"
import {H2} from "../../UI/Titles";
import Slider from "../Slider";
import SlideInterface from "../Slider/Slide.interface";
import {AlignProperty} from "../../utils/AlignProperty.enum";

const slides: SlideInterface[] = [
    {
        id: 1,
        img: "hindi.jpg",
        title: "Best courses ever",
        text: "Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the \"teacher\" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc."
    },
    {
        id: 2,
        img: "woman.jpg",
        title: "Amazing teaching",
        text: "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest."
    },
    {
        id: 3,
        img: "gman.jpg",
        title: "Simple and easy",
        text: "I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun."
    }
]


const Review: FC = ()=> {
    return(
        <div className={styles.review}>
            <H2 text={"Review"} marginBottom={48} align={AlignProperty.CENTER}/>
            <Slider slides={slides}/>
        </div>
    )
}

export default Review