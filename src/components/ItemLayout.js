import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  card: {
    maxWidth: '100%'
  }
}));

export default function ComplexGrid(props) {
  const classes = useStyles();

  // return (
  //   <div className={classes.root}>
  //     <Paper className={classes.paper}>
  //       <Grid container spacing={10}>
  //         <Grid item>
  //           <CardMedia
  //             component="img"
  //             alt="Contemplative Reptile"
  //             height="140"
  //             image={props.image}
  //             title="Contemplative Reptile"
  //           />
  //           {/* <ButtonBase className={classes.image}>
  //             <img className={classes.img} alt="complex" src={props.image} />
  //           </ButtonBase> */}
  //         </Grid>
  //         <Grid item xs={12} sm container>
  //           <Grid item xs container direction="column" spacing={2}>
  //             <Grid item xs>
  //               <Typography gutterBottom variant="subtitle1">
  //                 {props.title}
  //               </Typography>
  //               <Typography variant="body2" gutterBottom>
  //                 {props.artiste}
  //               </Typography>
  //               <Typography variant="body2" color="textSecondary">
  //                 ID: 1030114
  //               </Typography>
  //             </Grid>
  //             <Grid item>
  //               <Typography variant="body2" style={{ cursor: 'pointer' }}>
  //                 Buy
  //               </Typography>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Typography variant="subtitle1">€{props.price}</Typography>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     </Paper>
  //   </div>
  // );
  return (
    <Card className={classes.card}>
      <Grid container direction="row">
          <Grid item>
            <CardMedia
              component="img"
              alt={props.title}
              height="140"
              image={props.image}
              title={props.title}
              />
          </Grid>
          <Grid>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.price} $
              </Typography>
            </CardContent>
          <CardActions>
            <Button size="small" color="inherit">
              Add to cart
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
