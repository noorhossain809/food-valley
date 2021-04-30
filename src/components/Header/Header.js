import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import header from '../../images/bannerbackground.png'
import { ButtonToolbar, Form, FormControl, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import NavFile from '../NavFile/NavFile';
import logo from '../../images/logo2.png'




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = () => {


    const classes = useStyles();

    return (
        <div className={classes.root}>
            
      <AppBar position="static" variant="contained" color="">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <img style={{width:'200px'}} src={logo} alt=""/>
          </Typography>
           
          <Link to="/home" style={{color:'red', marginRight:'15px',}}><h4>HOME</h4></Link>
          <Link to="/login" ><h4 style={{color:'red', fontWeight:'450'}}>LOGIN</h4></Link>
        </Toolbar>
      </AppBar>
      <div style={{width:'500px'}} style={{ backgroundImage: `url(${header})` }} >
      <h2 style={{textAlign:'center', fontWeight:'400'}}>Best food waiting for your belley</h2>
      <Form inline style={{justifyContent:'center', marginTop:'20px'}}>
      <FormControl style={{borderRadius:'20px'}} type="text" placeholder="Search food items" className="mr-sm-2" />
      <Button style={{borderRadius:'20px'}} variant="contained" color="secondary">Search</Button>
      
    </Form>
      <img style={{height:'200px', width:'100%'}} src={header} alt=""/>
      </div>
      <NavFile></NavFile>
      {/* <div className="row">
              {
                events.map(event => <Home event={event}></Home>)
              }
            </div> */}
    </div>
    );
};

export default Header;