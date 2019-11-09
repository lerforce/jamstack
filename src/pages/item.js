import React from "react"
import RootLayout from '../components/RootLayout'
import AppBar from '../components/AppBar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ShopItemDescription from '../components/ShopItemDescription'

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(8),
    textAlign: 'center'
  }
}));

export default (props) => {
  const classes = useStyles()
  const data = props.location.state.props
  
  return (
    <RootLayout>
      <AppBar/>
      <Typography color="inherit" align="left" variant="h2" marked="center" className={classes.title}>
        {data.title}
      </Typography>
      <Grid item container spacing={2} direction="column" justify="center" alignItems="center" className={classes.itemsContainer}>
        <ShopItemDescription
          title={data.title}
          price={data.price}
          artiste={data.artiste}
          image={data.image}
          html={data.html}
        />
      </Grid>
    </RootLayout>
  )
}