


export const GetInitialValues = (country, activeTab) => {
    let initialValues = {};
    switch (country) {
        case 'eur':
            switch (activeTab) {
                case 'insideeur':
                    initialValues = { fullnameofaccount: '', iban: '' }
                    break;
                case 'outsideeur':
                    initialValues = { fullnameofaccount: '', swftcode: '', iban: '' }
                    break;
                default:
                    break;
            }
            break;
        case 'gup':
            switch (activeTab) {
                case 'localbanck':
                    initialValues = { fullnameofaccount: '', uksortcode: '', accountno: '' }
                    break;
                case 'iban':
                    initialValues = { fullnameofaccount: '', ibanaccountno: '' }
                    break;
                default:
                    break;
            }
            break;
        default:
            initialValues = {}
            break;
    }
    return initialValues;
}

