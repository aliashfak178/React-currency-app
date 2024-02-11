import * as React from 'react';
import './CreateAccount.css';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import { GetInitialValues } from '../../utils/utils'
import { GetAccountValidators } from '../../validator/accountValidator'
import { toast } from 'react-toastify';


function CreateAccount() {

    const toastConfig = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    };


    const [country, setCountry] = React.useState('');
    const [activeTab, setTab] = React.useState('');

    const handleChange = (event) => {
        const selectedCountry = event.target.value;
        setCountry(selectedCountry);
        setTab(selectedCountry === 'eur' ? 'insideeur' : 'localbank');
    };

    const tabChange = (event, newValue) => {
        setTab(newValue)
        formik.resetForm()
    };

    const createAccount = () => {
        const errors = formik.errors;

        if (Object.keys(errors).length) {
            const firstErrorKey = Object.keys(errors)[0];
            toast.error(errors[firstErrorKey], toastConfig);
        } else {
            formik.handleSubmit();
        }
    }

    const formik =
        useFormik({
            initialValues: GetInitialValues(country, activeTab),
            validationSchema: GetAccountValidators(country, activeTab),
            validateOnChange: true,
            validateOnBlur: false,
            onSubmit: (values, action) => {
                toast.success('Form submitted successfully', toastConfig);
                action.setValues({})
                action.resetForm();
            },
        });

    return (
        <>
            <h1 className="modal-title">Enter your account details</h1>
            <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-simple-select-error-label">Currency</InputLabel>
                    <Select labelId="demo-simple-select-error-label" id="demo-simple-select-error" value={country}
                        label="Currency" onChange={handleChange}>
                        <MenuItem value={'eur'}> EUR</MenuItem>
                        <MenuItem value={'gup'}>GUP</MenuItem>
                    </Select>
                    {country === "" ? <FormHelperText>Select the Country</FormHelperText> : <></>}
                </FormControl>
            </div>
            {country !== "" ?
                <>
                    <div>
                        <span>Bank details</span>
                        <hr />
                        {country === 'eur' ?
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={activeTab}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={tabChange} aria-label="lab API tabs example">
                                            <Tab label="Inside Europe" value="insideeur" />
                                            <Tab label="Outside Europe" value="outsideeur" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="insideeur">
                                        <TextField error={formik.errors.fullnameofaccount && formik.touched.fullnameofaccount}
                                            id="outlined-error-helper-text" label="Full name of the account" name="fullnameofaccount"
                                            value={formik.values.fullnameofaccount} onChange={formik.handleChange}
                                            onBlur={formik.handleBlur} helperText={(formik.errors.fullnameofaccount &&
                                                formik.touched.fullnameofaccount) ? formik.errors.fullnameofaccount : ''} sx={{
                                                    m: 1,
                                                    width: 300
                                                }} />
                                        <TextField error={formik.errors.iban && formik.touched.iban} id="outlined-error-helper-text"
                                            label="IBAN" name="iban" value={formik.values.iban} onChange={formik.handleChange}
                                            onBlur={formik.handleBlur} helperText={(formik.errors.iban && formik.touched.iban) ?
                                                formik.errors.iban : ''} sx={{ m: 1, width: 300 }} />
                                    </TabPanel>
                                    <TabPanel value="outsideeur">
                                        <TextField error={formik.errors.fullnameofaccount && formik.touched.fullnameofaccount}
                                            id="outlined-error-helper-text" label="Full name of the account" name="fullnameofaccount"
                                            value={formik.values.fullnameofaccount} onChange={formik.handleChange}
                                            onBlur={formik.handleBlur} helperText={(formik.errors.fullnameofaccount &&
                                                formik.touched.fullnameofaccount) ? formik.errors.fullnameofaccount : ''} sx={{
                                                    m: 1,
                                                    width: 300
                                                }} />
                                        <TextField error={formik.errors.swftcode && formik.touched.swftcode}
                                            id="outlined-error-helper-text" label="SWFT/BC Code" name="swftcode"
                                            value={formik.values.swftcode} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                            helperText={(formik.errors.swftcode && formik.touched.swftcode) ? formik.errors.swftcode
                                                : ''} sx={{ m: 1, width: 300 }} />
                                        <TextField error={formik.errors.iban && formik.touched.iban} id="outlined-error-helper-text"
                                            label="IBAN" name="iban" value={formik.values.iban} onChange={formik.handleChange}
                                            onBlur={formik.handleBlur} helperText={(formik.errors.iban && formik.touched.iban) ?
                                                formik.errors.iban : ''} sx={{ m: 1, width: 300 }} />
                                    </TabPanel>
                                </TabContext>
                            </Box>
                            :
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={activeTab}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={tabChange} aria-label="lab API tabs example">
                                            <Tab label="Local bank account" value="localbank" />
                                            <Tab label="IBAN" value="iban" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="localbank">
                                        <TextField error={formik.errors.fullnameofaccount && formik.touched.fullnameofaccount}
                                            id="outlined-error-helper-text" label="Full name of the account" name="fullnameofaccount"
                                            value={formik.values.fullnameofaccount} onChange={formik.handleChange}
                                            onBlur={formik.handleBlur} helperText={(formik.errors.fullnameofaccount &&
                                                formik.touched.fullnameofaccount) ? formik.errors.fullnameofaccount : ''} sx={{
                                                    m: 1,
                                                    width: 300
                                                }} />
                                        <TextField error={formik.errors.uksortcode && formik.touched.uksortcode}
                                            id="outlined-error-helper-text" label="UK sort Code" name="uksortcode"
                                            value={formik.values.uksortcode} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                            helperText={(formik.errors.uksortcode && formik.touched.uksortcode) ?
                                                formik.errors.uksortcode : ''} sx={{ m: 1, width: 300 }} />
                                        <TextField error={formik.errors.accountno && formik.touched.accountno}
                                            id="outlined-error-helper-text" label="Account No" name="accountno"
                                            value={formik.values.accountno} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                            helperText={(formik.errors.accountno && formik.touched.accountno) ? formik.errors.accountno
                                                : ''} sx={{ m: 1, width: 300 }} />
                                    </TabPanel>
                                    <TabPanel value="iban">
                                        <TextField error={formik.errors.fullnameofaccount && formik.touched.fullnameofaccount}
                                            id="outlined-error-helper-text" label="Full name of the account" name="fullnameofaccount"
                                            value={formik.values.fullnameofaccount} onChange={formik.handleChange}
                                            onBlur={formik.handleBlur} helperText={(formik.errors.fullnameofaccount &&
                                                formik.touched.fullnameofaccount) ? formik.errors.fullnameofaccount : ''} sx={{
                                                    m: 1,
                                                    width: 300
                                                }} />
                                        <TextField error={formik.errors.ibanaccountno && formik.touched.ibanaccountno}
                                            id="outlined-error-helper-text" label="IBAN Account Number" name="ibanaccountno"
                                            value={formik.values.ibanaccountno} onChange={formik.handleChange}
                                            onBlur={formik.handleBlur} helperText={(formik.errors.ibanaccountno &&
                                                formik.touched.ibanaccountno) ? formik.errors.ibanaccountno : ''} sx={{
                                                    m: 1, width: 300
                                                }} />
                                    </TabPanel>
                                </TabContext>
                            </Box>
                        }
                    </div>
                    <Box sx={{ '& button': { m: 2, width: 400 } }}>
                        <Button size="large" color="success" variant="contained" onClick={() => { createAccount() }}>Submit</Button>
                    </Box>
                </>
                : <></>}
        </>
    )
}

export default CreateAccount;