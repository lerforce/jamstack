import React from "react"
import RootLayout from '../components/RootLayout'
import AppBar from '../components/AppBar'
// import Grid from '@material-ui/core/Grid'
import Stepper from '../components/Stepper'
import {Helmet} from "react-helmet";

export default (props) => {
    return (
        <RootLayout>
        <Helmet>
            <script src="https://js.stripe.com/v3/"></script>
        </Helmet>
        <AppBar/>
        <Stepper/>
        </RootLayout>
    )
}