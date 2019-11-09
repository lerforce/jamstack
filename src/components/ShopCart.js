import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from "react-redux"
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover'
import ShopCartContent from './ShopCartContent'

export default function ShopCart() {

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const Counter = ({cart, count}) => (
  <div>
    <IconButton aria-label="cart" onClick={handleClick}>
      <StyledBadge badgeContent={count} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>

    <Popover
      anchorReference="anchorPosition"
      anchorPosition={{ top: 80, left: 1180 }}
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <ShopCartContent 
      data={cart}
      />
    </Popover>
  </div>
)

  Counter.propTypes = {
    cart: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
  }

  const mapStateToProps = ({ cart, count }) => {
    return { cart, count }
  }

  const ConnectedCounter = connect(
    mapStateToProps,
  )(Counter)

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <ConnectedCounter/>
    </div>
  );
}