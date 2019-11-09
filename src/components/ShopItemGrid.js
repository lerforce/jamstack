import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { navigate } from 'gatsby'

const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    minWidth: 300
  },
  media: {
    height: 140,
  },
});

const AddToCart = ({increment, remove}) => (
  <div>
    <Button onClick={increment} size='small'>
      Add to cart
    </Button>
  </div>
)

export default function MediaCard(props) {
  AddToCart.propTypes = {
    increment: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired,
  }
  
  const mapStateToProps = ({ cart }) => {
    return { cart }
  }
  
  const mapDispatchToProps = dispatch => {
    return { 
      increment: () => dispatch({ type: `INCREMENT`, data: props }),
    }
  }
  
  const ConnectedAddToCart = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddToCart)

  const classes = useStyles();

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
      <CardActionArea onClick={itemClick}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ConnectedAddToCart/>
        <Button size="small" color="secondary" onClick={itemClick}>
          See More
        </Button>
      </CardActions>
    </Card>
  );
}