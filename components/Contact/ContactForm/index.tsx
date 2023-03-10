import {FC} from "react";
import styles from "./ContactForm.module.scss"
import {H2} from "../../../UI/Titles";
import Text from "../../../UI/Text";
import Input from "../../../UI/Input";
import Btn from "../../../UI/Btn";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import ContactFormFieldsInterface from "./types/ContactFormFields.interface";
import {contactSchema} from "./schemas/contact.schema";
import axios from "axios";


const ContactFrom: FC = ()=> {
    const form = useForm<ContactFormFieldsInterface>({
        mode: "onChange",
        resolver: yupResolver(contactSchema),
    })

    const onSubmit:SubmitHandler<ContactFormFieldsInterface> = async (data)=> {
        const req = await axios.post<ContactFormFieldsInterface>(`${process.env.NEXT_PUBLIC_SERVER_HOST}/feedback`, data)

        if (req.status === 201) {
            form.reset()
            window.alert(`thanks ${req.data.name}, we will contact you soon!`)
        } else {
            window.alert(`we sorry ${data.name}, some server error occurred`)
        }

    }

    return(
        <div className={styles.contactFrom}>
            <H2 text={"Contact us"} marginBottom={16} />
            <Text text={"Do you have any kind of help please contact with us."}/>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Input filedName={"Name"} register={form.register("name")} error={form.formState.errors.name?.message}/>
                <Input filedName={"Phone"} register={form.register("phone")} error={form.formState.errors.phone?.message}/>
                <Input filedName={"E-mail"} register={form.register("email")} error={form.formState.errors.email?.message}/>

                <Btn text={"Send"} className={styles.contactFrom__btn} type={"submit"}/>
            </form>
        </div>
    )
}

export default ContactFrom