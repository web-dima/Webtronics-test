import {FC, useContext} from "react";
import styles from "./SliderImages.module.scss"
import {SliderContext} from "../index";
import Image from "next/image";
interface SliderImagesProps {

}

const SliderImages: FC<SliderImagesProps> = ()=> {
    const {images, currentSlide} = useContext(SliderContext)

    return (
        <div className={styles.sliderImages}>
            {images.map((img,idx)=> {
                if (idx === currentSlide - 1) {
                    return <div className={`${styles.sliderImages__bgWrapper} ${styles.sliderImages__bgWrapper__active}`}>
                        <Image
                            className={`${styles.sliderImages__bgWrapper__img}`}
                            src={require("../../../public/assets/img/reviews/" + img)}
                            alt={img}
                            key={img}
                        />
                    </div>
                }
                return <div className={styles.sliderImages__bgWrapper}>
                    <Image
                        className={styles.sliderImages__bgWrapper__img}
                        src={require("../../../public/assets/img/reviews/" + img)}
                        alt={img}
                        key={img}
                    />
                </div>
            })}
        </div>
    )
}

export default SliderImages