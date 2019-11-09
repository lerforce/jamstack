import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core';
import { Markup } from 'interweave'

const styles = theme => ({
    root: {
        width: '100%'
    },
    image: {
        width: 252,
        height: 252
    },
    description: {
        marginLeft: theme.spacing(4),
    },
    price: {
        marginTop: theme.spacing(8)
    }
})

const AddToCart = ({ increment }) => (
    <div>
        <Button onClick={increment} variant="outlined" color="secondary" size='small'>
            Add to cart
        </Button>
    </div>
)

function ShopItemDescription(props) {

    const { classes } = props

    AddToCart.protoTypes = {
        increment: PropTypes.func.isRequired
    }

    const mapStateToProps = ({ cart }) => {
        return { cart }
    }

    const mapDispatchToProps = dispatch => {
        return {
            increment: () => dispatch({ type: 'INCREMENT', data: props })
        }
    }

    const ConnectedAddToCart = connect(
        mapStateToProps,
        mapDispatchToProps
    )(AddToCart)

    return (
        <div>
            <Grid 
                item 
                container 
                direction="row" 
                spacing={8}
                style={{
                    border: "1px solid grey", 
                }}
            >
                <Grid item container lg={6} xs={6} alignItems="flex-start">
                    <img
                        src={props.image}
                        className={classes.image}
                        alt={props.title}
                    />
                </Grid>
                <Grid 
                    item 
                    container
                    lg={6} 
                    xs={6}

                    justify="center"
                    alignItems='center'
                >
                    <Grid item className={classes.description}>
                        <Markup content={props.html}/>
                        <Grid container direction="row"  className={classes.price}>
                            <Grid item container lg={6} xs={6} alignItems="center">
                                <Typography>{props.price} $</Typography>
                            </Grid>
                            <Grid item lg={6} xs={6}>
                                <ConnectedAddToCart/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

ShopItemDescription.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ShopItemDescription)