import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import NavBarPosta from './NavBarPosta'
import { green } from '@material-ui/core/colors';
import {
  createStyles,
  fade,
  Theme,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';

import {register} from './UserFunctions';


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'black',
      fontSize:'24px'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [userFirstName, setUserFirstName] = React.useState("");
  const [userLastName, setUserLastName] = React.useState("");

  const authHandler = async () => {
    /*alert(`Usuario Creado!
    Email: ${userEmail}
    Contraseña: ${userPassword}
    Primer Nombre: ${userFirstName}
    Segundo Nombre: ${userLastName}`)
    ;*/

    const user = {
      nombre:userFirstName,
      apellido:userLastName,
      email:userEmail,
      clave: userPassword
  }

      register(user).then((res,err) => {
        if(res.error=="User already exists")
        {
          alert("Ese mail ya esta registrado")
          
          //alert(res);
          //console.log(res);
          //console.log(res.error);
        }
        else
        {
          window.location.href="http://localhost:3000/loginPosta";
        }
      });




  };



  return (

    <div>

     

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} style={{"width":"110px","height":"110px"}}>
            <LockOutlinedIcon style={{"width":"100px","height":"100px"}} ></LockOutlinedIcon>
        </Avatar>
        <Typography component="h1" variant="h2" style={{ fontSize:100,
              color:'white',
              fontFamily:'Times New Roman',
              "textShadow": "-1px 0 black, 0 5px black, 5px 0 black, 0 -1px black"
             
              }}>
          Registrarse
        </Typography>
        <form className={classes.form} noValidate onSubmit={e => {
        e.preventDefault();
        authHandler();
        // Auth handler
      }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CssTextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="PrimerNombre"
                autoFocus
              style={{"background":"white"}}
              onChange={e => setUserFirstName(e.target.value)}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                autoComplete="lname"
                style={{"background":"white"}}
                onChange={e => setUserLastName(e.target.value)}/>
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                style={{"background":"white"}}
                onChange={e => setUserEmail(e.target.value)}/>
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                style={{"background":"white"}}
                onChange={e => setUserPassword(e.target.value)}/>
            </Grid>
            <Grid item xs={12}>

            </Grid>
          </Grid>
          <Button block={true}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarse
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/loginposta" variant="body2" style={{ fontSize:30,
              color:'black',
              fontFamily:'Times New Roman',
              "textShadow": "-1px 0 black, 0 1px black, 2px 0 black, 0 -1px black"             
              }}>
                Ya estas registrado? Hace click aca.
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>

    </div>
  );
}