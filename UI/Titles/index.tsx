import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import H5 from "./H5";
import {AlignProperty} from "../../utils/AlignProperty.enum";

export interface TitleProps {
    text: string,
    marginBottom: number,
    className?: string,
    align?: AlignProperty
}

export {
    H1,H2, H3, H4, H5
}