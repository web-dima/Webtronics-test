import {FC} from "react";
import styles from "./Gallery.module.scss"
import {H2} from "../../UI/Titles";
import Text from "../../UI/Text";
import Image from "next/image";
import {AlignProperty} from "../../UI/utils/AlignProperty.enum";

const Gallery: FC = ()=> {
    return(
        <div className={styles.gallery}>
            <H2 text={"Gallery"} marginBottom={48} align={AlignProperty.CENTER}/>
            <div className={styles.gallery__inner}>
                <div className={styles.gallery__left}>
                    <Text className={styles.gallery__left__text} text={"By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects. "} />
                    <Image src={require("../../public/assets/img/gallery/dev1.jpg")} alt={"developer-1"} width={288} height={434} />
                </div>
                <div className={styles.gallery__right}>
                    <div className={styles.gallery__right__images}>
                        <Image className={styles.gallery__right__images__main} src={require("../../public/assets/img/gallery/dev2.jpg")} alt={"developer-2"} width={600} height={434} />
                        <Image className={styles.gallery__right__images__inv} src={require("../../public/assets/img/gallery/dev3.jpg")} alt={"developer-3"} width={288} height={209} />
                        <Image className={styles.gallery__right__images__last} src={require("../../public/assets/img/gallery/dev3.jpg")} alt={"developer-4"} width={288} height={209} />
                    </div>
                    <div className={styles.gallery__right__text}>
                        <Text text={"If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page."}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery