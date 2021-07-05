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
    let restaurant_id = props.location.state.restaurantid
    let restaurentname = props.location.state.restaurentname
    var data = [
        {
            menu_item_name: "Hard tacos or tostadas.",
            menu_item_price: "250"
        },
        {
            menu_item_name: "Huevos rancheros.",
            menu_item_price: "320"
        },
        {
            menu_item_name: "Stir fry.",
            menu_item_price: "1114"
        },
        {
            menu_item_name: "Burgers or hotdogs.",
            menu_item_price: "789"
        },
        {
            menu_item_name: "Quesadillas (plain cheese, steak, chicken, or pork)",
            menu_item_price: "1254"
        },
    ]
    const [resultData, setResultData] = useState(data)
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await Documenu.Restaurants.getMenuItems(restaurant_id)
            if (response.data.length > 0) {
                setResultData(response.data)
            }
        }
        fetchMyAPI()
    }, [])
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
                        {resultData.map((value) => (
                            <div style={{ marginBottom: '7px' }}>
                                <Typography>{value.menu_item_name} </Typography>
                                <Typography align='right' style={{ marginTop: '-25px' }}><b>$ {value.menu_item_price}</b></Typography>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}