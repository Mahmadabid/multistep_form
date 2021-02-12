import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { TextField } from "@material-ui/core";
import { Personal_Details } from '../Global/Types';

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

export const Personal_Detail: React.FC<Personal_Details> = ({ step, initValues, setValues }) => {
    const classes = useStyles();

    const schema = Yup.object({
        firstName: Yup.string()
            .max(20, 'The FirstName must be less than 20 characters')
            .required('First Name is Required'),
        lastName: Yup.string()
            .max(20, 'The LastName must be less than 20 characters')
            .required('Last Name is Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is Required'),
        password: Yup.string()
            .max(20, 'Password must be less than 20 characters')
            .min(5, 'Password must be 5 characters long')
            .required('Password is Required'),
        contactNumber: Yup.string()
            .required('Contact Number is Required')
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
                        step(1);
                        setValues({ ...values })
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
                                        <Field fullWidth name="firstName" type="text" as={TextField} label="FirstName" variant="outlined" required />
                                        <ErrorMessage component="div" className="error" name="firstName" />
                                    </Grid>
                                    <Grid item xs={6} lg={3}>
                                        <Field fullWidth name="lastName" type="text" as={TextField} label="LastName" variant="outlined" required />
                                        <ErrorMessage component="div" className="error" name="lastName" />
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
                                        <Field fullWidth name="email" type="text" as={TextField} label="Email" variant="outlined" required />
                                        <ErrorMessage component="div" className="error" name="email" />
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
                                        <Field fullWidth name="password" type="password" as={TextField} label="Password" variant="outlined" required />
                                        <ErrorMessage component="div" className="error" name="password" />
                                    </Grid>
                                    <Grid item xs={6} lg={3}>
                                        <Field fullWidth name="contactNumber" type="number" as={TextField} label="Contact Number" variant="outlined" required />
                                        <ErrorMessage component="div" className="error" name="contactNumber" />
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
                                            <Button fullWidth type="submit" color="secondary" variant="outlined">Submit</Button>
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
