import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import SaveIcon from '@material-ui/icons/CheckCircle'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import RemoveIcon from '@material-ui/icons/Remove'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { navigate } from 'gatsby'

const Remover = ({ remove }) => (
  <IconButton onClick={remove}>
    <RemoveIcon/>
  </IconButton>
)

function ShopItem(props) {
  Remover.propTypes = {
    remove: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired
  }
  
  const mapStateToProps = ({ remove }) => {
    return { remove }
  }
  
  const mapDispatchToProps = dispatch => {
    return { remove: () => dispatch({ type: 'REMOVE', data: props.data})}
  }

  const ConnectedRemover = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Remover)
  
  return (
    <Grid container direction="row">
      <Grid item container lg={10} xs={10}>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="test" src={props.data.image}/>
        </ListItemAvatar>
        <ListItemText
          primary={props.data.title}
          secondary={props.data.price + " $"}
          />
        </ListItem>
      </Grid>
      <Grid item container justify="center" alignItems="center" lg={2} xs={2}>
        <ConnectedRemover/>
      </Grid>
    </Grid>
  )
}

function ShopItems(props) {

  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    typography: {
      padding: theme.spacing(2),
    }
  }))
  const classes = useStyles()

  if (props.data.length === 0) {
    return (
      <Typography className={classes.typography}>No items in cart</Typography>
    )
  } else {
    return (
      <List className={classes.root}>
        {props.data.map((item, index) => (
          <div>
            <ShopItem data={item}/>
            <Divider variant='inset' component='li'/>
          </div>
        ))}
      </List>
    )
  }
}

function CheckoutButton(props) {
  const useStyles = makeStyles(theme => ({
    imageButton: {
      marginLeft: theme.spacing(2)
    },
    button: {
      width: '100%'
    }
  }))
  const classes = useStyles()

  function checkoutClick() {
    navigate("/checkout", {
      state: {
        props
      }
    })
  }

  if (props.data.length === 0) {
    return (
      <Button variant="contained" color="secondary" size="large" disabled className={classes.button}>
      Checkout
      <SaveIcon className={classes.imageButton}/>
    </Button>
    )
  } else {
    return (
      <Button variant="contained" color="secondary" size="large" className={classes.button} onClick={checkoutClick}>
        Checkout
        <SaveIcon className={classes.imageButton}/>
      </Button>
    )
  }
}

function TotalPrice(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    typography: {
      padding: theme.spacing(2),
    },
  }))
  const classes = useStyles()

  var price = 0.0
  props.data.forEach(element => {
    price += parseFloat(element.price)
  })
  if (props.data.length === 0) {
    return (
      <div/>
    )
  }
  return (
    <Grid container className={classes.root} direction="row">
      <Grid item container justify="flex-start" lg={6} xs={6}>
        <Typography className={classes.typography}>
          Total :
        </Typography>
      </Grid>
      <Grid item container justify="flex-end" lg={6} xs={6}>
        <Typography className={classes.typography}>
          {price} $
        </Typography>
      </Grid>
    </Grid>
  )
}

export default function ShopCartContent(props) {
  const useStyles = makeStyles(theme => ({
    typography: {
      padding: theme.spacing(2),
    },
  }))
  const classes = useStyles()

  return (
    <div style={{minWidth: 300}}>
      <Typography className={classes.typography}>
        My shop cart :
      </Typography>
      <ShopItems data={props.data}></ShopItems>
      <TotalPrice data={props.data}/>
      <CheckoutButton data={props.data}/>
    </div>
  )
}

