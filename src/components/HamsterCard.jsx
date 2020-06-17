import React from 'react';
import './Components.css'

//Imports for Material-UI elements
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//CSS for Material-UI elements
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 300,
    },
});



const HamsterCard = ({ hamster, postResult }) => {
    const classes = useStyles();

    return (
        <div>{hamster ?
            <main>
                <Card className={classes.root}
                    onClick={e => postResult()}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={`/api/assets/${hamster.imgName}`}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" align="center">
                                <h2 className="cardname">{hamster.name}</h2>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Loves: {hamster.loves}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" align="left">
                                Favorite food: {hamster.favFood}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </main> : 'nodata'}
        </div>
    )
}

export default HamsterCard;