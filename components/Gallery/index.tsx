import {FC} from "react";
import styles from "./Gallery.module.scss"

interface GalleryProps {

}

const Gallery: FC<GalleryProps> = ()=> {
    return(
        <div className={styles.Gallery}>Gallery</div>
    )
}

export default Gallery