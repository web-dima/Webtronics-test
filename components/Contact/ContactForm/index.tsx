import {FC} from "react";
import styles from "./ContactForm.module.scss"
import {H2} from "../../../UI/Titles";
import Text from "../../../UI/Text";
import Input from "../../../UI/Input";
import Btn from "../../../UI/Btn";

interface ContactFromProps {

}

const ContactFrom: FC<ContactFromProps> = ()=> {
    return(
        <div className={styles.contactFrom}>
            <H2 text={"Contact us"} marginBottom={16}/>
            <Text text={"Do you have any kind of help please contact with us."}/>
            <form>
                <Input filedName={"1"} error={"дудай"}/>
                <Input filedName={"2"} disabled/>
                <Input filedName={"3"}/>
                <Btn text={"Send"} className={styles.contactFrom__btn}/>
            </form>
        </div>
    )
}

export default ContactFrom