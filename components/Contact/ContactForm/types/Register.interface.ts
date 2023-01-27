import {ChangeHandler} from "react-hook-form";
import {FocusEventHandler, FormEventHandler} from "react";

export default interface RegisterInterface {
    name: string,
    onChange: FormEventHandler,
    onBlur: FocusEventHandler,
    ref: any
}