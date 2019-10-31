import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Markdown from './Markdown';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import {all} from './ProductFunctions'
import makeCarousel from 'react-reveal/makeCarousel';
import Carrusel from './Carrusel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    backgroundColor: "white",
    marginTop:50
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },


  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/1024x768/?pet)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    top:50,
    border:'black solid 3px !important'
  },
  mainFeaturedPostPersonal: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    top:50
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));



const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];

const posts = [post1, post2, post3];


const social = ['GitHub', 'Twitter', 'Facebook'];




export default function Blog() {

  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };







  const classes = useStyles();

  const[cards,addItem] = useState([{}]);

  /*useEffect(() => {
      const fetchItems = async () => {
          const response = await Axios.get("http://localhost:5000/products/all")
          addItem(response.data);
          console.log("refreshed");
      }
      fetchItems();
      console.log(cards);
  },[]);*/
  useEffect(() => {
      const traerItems = async () => {
        const res = await all();
        addItem(res);
      }
      traerItems();
      console.log(cards);   
  },[]);




  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg"> 

        <main>

          
          
          {/* Main featured post */}
         
          <Paper className={classes.mainFeaturedPost}>
            
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Pet Lovers
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    El Ecommerce mas completo para mascotas
                  </Typography>
                

               <Typography variant="h6" color="inherit" paragraph>
                
                    Aca vas a encontrar todo lo que necesitas para hacer
                
                    feliz a tu mascota

                  </Typography>
                 


                </div>
              </Grid>
            </Grid>
          </Paper>
          <div>

          <FormControl variant='standard' className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="filled-age-native-simple">
              Filtrar Carrusel por :
            </InputLabel>
            <Select
              value={values.age}
              onChange={handleChange}
              labelWidth={labelWidth}
              inputProps={{
                name: 'age',
                id: 'outlined-age-simple',
              }}
            >
              <MenuItem value="Descuentos">
                <em>Destacado</em>
              </MenuItem>
              <MenuItem value={10}>Mas Vendidos</MenuItem>
              <MenuItem value={20}>Descuentos</MenuItem>
            </Select>
          </FormControl>
          
      
           <Carrusel/>
          </div>
          {/* End main featured post */}
         
         
        </main>






      </Container>

      


     
    </React.Fragment>
  );
}