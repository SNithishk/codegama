import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    cardstyles: {
        width: '100%',
        padding: 15,
    },
}));

export default function Detailspage(props) {
    const classes = useStyles();
    const Documenu = require('documenu')
Documenu.configure('0a87f7cafb3987be18bff1ba0815d561')
const [resultData, setResultData] = useState([])

useEffect(() => {
  async function fetchMyAPI() {
    let response = await  Documenu.Restaurants.getMenuItems(restaurantid)
    setResultData(response.data)
  }
  fetchMyAPI()
}, [])

    let restaurant_id = props.location.state.restaurantid
    let restaurentname = props.location.state.restaurentname
    var restaurantid = restaurant_id.toString();
    console.log("restaurantid",restaurantid)
    console.log("resultData",resultData)


    // const D = (props) => <Typography style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>{props.children}</Typography>
    return (
        <Grid
            container
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={3} lg={6}>
                <Card className={classes.cardstyles}>
                    <CardContent>
                    <Typography align='center'><h2>{restaurentname}</h2></Typography>
                        <Typography align='center'><h2>Menu</h2></Typography>
                    <Typography style={{marginBottom:'10px'}}><b>Vegiterian</b></Typography>
                        {/* {vegData.map((value) => {
                            return (
                                <div style={{marginBottom:'7px'}}>
                                    <Typography>{value.name} </Typography>
                                    <Typography align='right' style={{ marginTop: '-25px' }}><b> {value.price}</b></Typography>
                                </div>
                            )
                        })} */}
                        <Typography style={{marginBottom:'10px'}}><b>Non-Vegiterian</b></Typography>
                        {/* {nonVegData.map((value) => {
                            return (
                                <div style={{marginBottom:'7px'}}>
                                    <Typography>{value.name} </Typography>
                                    <Typography align='right' style={{ marginTop: '-25px' }}> <b>{value.price}</b></Typography>
                                </div>
                            )
                        })} */}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}