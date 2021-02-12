import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { TextField } from "@material-ui/core";
import { Payment_Details } from '../Global/Types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(1),
            flexGrow: 1,
        },
        paper: {
            margin: theme.spacing(1),
            flexGrow: 1,
            width: '200',
        },
        Grid: {
            marginTop: '10px',
        },
    }),
);

export const Payment_Detail: React.FC<Payment_Details> = ({ step, initValues, setValues }) => {
    const classes = useStyles();

    const schema = Yup.object({
        city: Yup.string()
            .required('City name is Required'),
        postalCode: Yup.number()
            .required('Postal Code is Required'),
        address: Yup.string()
            .required('Address is Required'),
        cardNumber: Yup.string()
            .required('Card Number is Required'),
        cardHolderName: Yup.string()
            .required('Card Holder Name is Required')
    })

    return (
        <div className={classes.root}>
            <Formik
                initialValues={
                    initValues
                }
                validationSchema={
                    schema
                }
                onSubmit={
                    (values) => {
                        step(2);
                        setValues({ ...initValues, ...values })
                    }
                }
            >
                {(formik) => (
                    <div className={classes.root}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={3}
                        >
                            <Form className={classes.root}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    spacing={2}
                                    className={classes.Grid}
                                >
                                    <Grid item xs={6} lg={3}>
                                        <Field fullWidth name="city" type="text" as={TextField} label="City" variant="outlined" required />
                                        <ErrorMessage component="div" className="error" name="city" />
                                    </Grid>
                                    <Grid item xs={6} lg={3}>
                                        <Field fullWidth name="postalCode" type="number" as={TextField} label="Postal Code" variant="outlined" required />
                                        <ErrorMessage component="div" className="error" name="postalCode" />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    spacing={2}
                                    className={classes.Grid}
                                >
                                    <Grid item xs={12} lg={6}>
                                        <Field fullWidth name="address" type="text" as={TextField} label="Address" variant="outlined" required />
                                        <ErrorMessage component="div" className="error" name="address" />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    spacing={2}
                                    className={classes.Grid}
                                >
                                    <Grid item xs={6} lg={3}>
                                        <Field fullWidth name="cardNumber" type="text" as={TextField} label="Card Number" variant="outlined" required />
                                        <ErrorMessage component="div" className="error" name="cardNumber" />
                                    </Grid>
                                    <Grid item xs={6} lg={3}>
                                        <Field fullWidth name="cardHolderName" type="string" as={TextField} label="Card Holder Name" variant="outlined" required />
                                        <ErrorMessage component="div" className="error" name="cardHolderName" />
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                        spacing={1}
                                        className={classes.Grid}
                                    >
                                        <Grid item xs={6} lg = {3}>
                                            <Button fullWidth onClick={()=> step(0)} variant="outlined" color="secondary">Back</Button>
                                        </Grid>
                                        <Grid item xs={6} lg = {3}>
                                            <Button fullWidth type="submit" variant="outlined" color="secondary">Submit</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Form>
                        </Grid>
                    </div>
                )}
            </Formik>
        </div>
    );
}
