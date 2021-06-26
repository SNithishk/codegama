import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles(() => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    width: '40%',
    marginLeft: 420,
    marginTop: 20
  },
  input: {
    marginLeft: 5,
    flex: 1,
  },
  datastyles: {
    width: '30%',
    float: 'left',
    height: '222px',
    padding: 15,
    marginBottom: 10,
    marginRight: 10
  },
}));
  function Dashboard(props) {
  const Documenu = require('documenu')
Documenu.configure('0a87f7cafb3987be18bff1ba0815d561')
const [resultData, setResultData] = useState([])
useEffect(() => {
  async function fetchMyAPI() {
      const params = {
    "lat": "40.68919",
    "distance": "1",
    "lon": "-73.992378",
    "page": "1"
  }
    let response = await  Documenu.Restaurants.searchGeo(params)
    setResultData(response.data)
  }
  fetchMyAPI()
}, [])
  const classes = useStyles();
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  useEffect(() => {
    setAllData(resultData);
    setFilteredData(resultData);
  }, [resultData]);
  const handleSearch = (event) => {
    let value = event.target.value;
    let result = [];
    result = allData.filter((data) => {
      return (data.restaurant_name.toLowerCase().search(value.toLowerCase()) !== -1 
      || data.restaurant_phone.toLowerCase().search(value.toLowerCase()) !== -1) 
    });
    setFilteredData(result);
  }
  return (
    <div>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          onChange={(event) => handleSearch(event)}
          placeholder="Search with address or name"
        />
        <SearchIcon />
      </Paper>
      <div>
      <img src="./Restaurantbanner.jpg" alt="Banner" width="95%" height="252px" style={{margin:"20px", objectFit:'cover'}} />
    </div>
      <div style={{ padding: 20 }}>
        {filteredData.map((value) => {
          return (
            <div key={value.id}>
              <Card className={classes.datastyles}>
                <CardActionArea onClick={() => {
                  props.history.push({ pathname: '/details', state: { restaurantid: value.restaurant_id, restaurentname: value.restaurant_name} })
                }}>
                  <CardContent>
                    <Typography>
                      <b> Name : </b> {value.restaurant_name}</Typography>
                    <Typography>
                      <b> Adddress : </b> {value.address.city}<br />
                      {value.address.formatted},<br />
                      {value.address.postal_code},<br />
                      {value.address.state},<br />
                      {value.address.street},<br />
                     <b>Phone :</b> {value.restaurant_phone}
                      </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Dashboard;
