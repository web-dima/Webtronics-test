import * as yup from "yup"
const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gmi
//
enum ValidationMessages {
    REQUIRED_ERROR_MESSAGE = "required",
    PHONE_ERROR_MESSAGE = "incorrect phone format",
    EMAIL_ERROR_MESSAGE = "incorrect email format",
}

export const contactSchema = yup.object({
    name: yup.string().required(ValidationMessages.REQUIRED_ERROR_MESSAGE),
    phone: yup.string().matches(phoneRegExp, ValidationMessages.PHONE_ERROR_MESSAGE).min(10).max(11).required(ValidationMessages.REQUIRED_ERROR_MESSAGE),
    email: yup.string().email(ValidationMessages.EMAIL_ERROR_MESSAGE).required(ValidationMessages.REQUIRED_ERROR_MESSAGE)
}).required();
