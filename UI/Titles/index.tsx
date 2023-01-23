import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";

export enum TitleAlign {
    CENTER= "center",
    RIGHT= "right",
    LEFT= "left"
}


export interface TitleProps {
    text: string,
    marginBottom: number,
    className?: string,
    align?: TitleAlign
}

export {
    H1,H2, H3, H4
}