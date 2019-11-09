import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { navigate } from 'gatsby';
import { connect } from "react-redux"
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    width: '100%'
  },
  image: {
    width: 128,
    height: '100%',
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  card: {
    minWidth: 600,
    maxWidth: 800,
  }
})

const AddToCart = ({increment, remove}) => (
  <div>
    <Button onClick={increment}>
      Add to cart
    </Button>
    {/* <Button onClick={remove}>
      Remove
    </Button> */}
  </div>
)

function ShopItem(props) {

  AddToCart.propTypes = {
    increment: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired
  }
  
  const mapStateToProps = ({ cart }) => {
    return { cart }
  }
  
  const mapDispatchToProps = dispatch => {
    return { 
      increment: () => dispatch({ type: `INCREMENT`, data: props }),
      remove: () => dispatch({type: 'REMOVE', data: props})
    }
  }
  
  const ConnectedAddToCart = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddToCart)

  // const classes = useStyles();
  const { classes } = props

  function itemClick() {
    console.log(props)
    navigate("/item", {
      state: {
        props
      }
    })
  }

  return (
    <Card className={classes.card}>
      <Grid container direction="row" className={classes.card}>
        <Grid item>
          <CardMedia
            component="img"
            alt={props.title}
            height="180"
            image={props.image}
            title={props.title}
            className={classes.image}
          />
        </Grid>
        <Grid item>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.price} $
            </Typography>
          </CardContent>
          <CardActions>
            <ConnectedAddToCart/>
            <Button size="small" color="inherit" onClick={itemClick}>
              See More
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

ShopItem.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ShopItem);