import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from './Button';
// import Switch from '@material-ui/core/Switch';
import Typography from './Typography';
import HomeLayout from './HomeLayout';
import Container from '@material-ui/core/Container'
import SiteDescription from '../store/description'
import { navigate } from 'gatsby';

const styles = theme => ({
  background: {
    backgroundImage: `url(${new SiteDescription().background})`,
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

// const AntSwitch = withStyles(theme => ({
//   root: {
//     width: 28,
//     height: 16,
//     padding: 0,
//     display: 'flex',
//   },
//   switchBase: {
//     padding: 2,
//     color: theme.palette.grey[500],
//     '&$checked': {
//       transform: 'translateX(12px)',
//       color: theme.palette.common.white,
//       '& + $track': {
//         opacity: 1,
//         backgroundColor: theme.palette.primary.main,
//         borderColor: theme.palette.primary.main,
//       },
//     },
//   },
//   thumb: {
//     width: 12,
//     height: 12,
//     boxShadow: 'none',
//   },
//   track: {
//     border: `1px solid ${theme.palette.grey[500]}`,
//     borderRadius: 16 / 2,
//     opacity: 1,
//     backgroundColor: theme.palette.common.white,
//   },
//   checked: {},
// }))(Switch);

function Home(props) {
  // const [state, setState] = React.useState({
  //   checkedC: true,
  // });

  function shopButtonClick() {
    navigate("/shop", {
      state: {
        props
      }
    })
  }

  let data = new SiteDescription()
  const { classes } = props;

  return (
    <HomeLayout backgroundClassName={classes.background}>
      <Container 
        style= {{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <img
          src={data.logo}
          alt="logo"
          width="100"
          height="100"
          className={classes.logo}
          style={{marginBottom: '32px'}}
        />
        <Typography color="inherit" align="center" variant="h2" marked="center">
          {data.title}
        </Typography>
      </Container>
      <Container 
        style= {{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        <Typography 
          color="inherit" 
          align="flex-start"
          justifyContent='flex-start'
          variant="h5" 
          className={classes.h5}
          style={{ margin: `1rem auto`, maxWidth: '100%', padding: `0 1rem` }}
          >
          {data.description}
        </Typography>
        </Container>
      <Button
        color={"secondary"}
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        to="/shop"
        onClick={shopButtonClick}
        style={{
          marginTop: 64
        }}
        >
        Shop
      </Button>
      {/* <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Off</Grid>
          <Grid item>
            <AntSwitch
              checked={state.checkedC}
              onChange={handleChange('checkedC')}
              value="checkedC"
            />
          </Grid>
          <Grid item>On</Grid>
        </Grid>
      </Typography> */}
    </HomeLayout>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
