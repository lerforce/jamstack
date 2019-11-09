import React from "react"
import RootLayout from '../components/RootLayout'
import AppBar from '../components/AppBar'
import ShopItem from '../components/ShopItem'
import Grid from '@material-ui/core/Grid';
import SiteItem from "../store/item"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import ShopLayout from '../components/HomeLayout'
import SiteDescription from '../store/description'
import Container from '@material-ui/core/Container'
import Config from '../store/config'
import ShopItemGrid from '../components/ShopItemGrid'

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(4),
    paddingLeft: theme.spacing(16),
    paddingRight: theme.spacing(16)
  },
  background: {
    backgroundImage: `url(${new SiteDescription().background})`,
    backgroundPosition: 'center',
    width: '100%'
  },
  title: {
    margin: theme.spacing(8),
    textAlign: 'center'
  },
}));

export default () => {
  const classes = useStyles();
  let data = new SiteItem();
  let config = new Config();
  const items = [];

  for (let index = 0; index < data.title.length; index++) {
    if (config.layout === "list") {
      items.push(
        <Grid item container xs={12} lg={12} justify="center">
          <ShopItem
            title={data.title[index]}
            price={data.price[index]}
            artiste={data.artiste[index]}
            image={data.image[index]}
            html={data.html[index]}
            />
        </Grid>
      );
    } else {
      items.push(
        <Grid item container xs={12} md={6} lg={4} xl={3} justify="center">
          <ShopItemGrid
            title={data.title[index]}
            price={data.price[index]}
            artiste={data.artiste[index]}
            image={data.image[index]}
            html={data.html[index]}
          />
        </Grid>
      )
    }
  }
  return (
    <RootLayout>
      <AppBar/>
      {/* <Container className={classes.background}> */}
        <Typography color="inherit" align="left" variant="h2" marked="center" className={classes.title}>
            Our shop items :
          </Typography>
        <Grid container direction="row" spacing={2} className={classes.root}>
          {/* <Grid item container spacing={1} direction="column" justify="center" alignItems="center" className={classes.itemsContainer}> */}
            {items}
          {/* </Grid> */}
        </Grid>
      {/* </Container> */}
    </RootLayout>
  )
}