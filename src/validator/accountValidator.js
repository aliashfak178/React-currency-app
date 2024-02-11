import * as Yup from "yup";



export const GetAccountValidators = (country, activeTab) => {
    let accountSchema;
    switch (country) {
        case 'eur':
            switch (activeTab) {
                case 'insideeur':
                    accountSchema = Yup.object({
                        fullnameofaccount: Yup.string().min(3, 'Name should be minimim 3 character').max(25, 'Name should be maximim 25 character').required("Please enter your fullname of account"),
                        iban: Yup.string().trim('space are not allowed').min(3, 'IBAN should be minimim 3 character').max(10, 'IBAN should be maximim 10 character').required("Please enter your IBAN"),

                    });
                    break;
                case 'outsideeur':
                    accountSchema = Yup.object({
                        fullnameofaccount: Yup.string().min(3, 'Name should be minimim 3 character').max(25, 'Name should be maximim 25 character').required("Please enter your fullname of account"),
                        iban: Yup.string().trim('space are not allowed').min(6, 'IBAN should be minimim 6 character').max(12, 'IBAN should be maximim 12 character').required("Please enter your IBAN"),
                        swftcode: Yup.string().trim('space are not allowed').min(8, 'SWFT should be minimim 8 character').max(12, 'SWFT should be maximim 12 character').required("Please enter your SWFT"),
                    });
                    break;
                default:
                    break;
            }
            break;
        case 'gup':
            switch (activeTab) {
                case 'localbank':
                    accountSchema = Yup.object({
                        fullnameofaccount: Yup.string().min(3, 'Name should be minimim 3 character').max(25, 'Name should be maximim 25 character').required("Please enter your fullname of account"),
                        uksortcode: Yup.string().trim('space are not allowed').min(6, 'UK sort code should be minimim 6 character').max(12, 'UK sort code should be maximim 12 character').required("Please enter your UK sort code"),
                        accountno: Yup.string().trim('space are not allowed').min(6, 'Account No should be minimim 6 character').max(12, 'Account No should be maximim 12 character').required("Please enter your Account No"),
                    });
                    break;
                case 'iban':
                    accountSchema = Yup.object({
                        fullnameofaccount: Yup.string().min(3, 'Name should be minimim 3 character').max(25, 'Name should be maximim 25 character').required("Please enter your fullname of account"),
                        ibanaccountno: Yup.string().required("Please enter your IBAN"),
                    });
                    break;
                default:
                    break;
            }
            break;
        default:

            break;
    }
    return accountSchema
}