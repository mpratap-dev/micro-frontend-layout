import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: theme.spacing(5),
    position: 'relative'
  },
  links: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  items: {
    fontSize: "0.875rem",
    width: '100%',
  },
  noResult: { 
    color: '#777',
  },
  menu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    background: '#FFF',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    maxHeight: 300,
    overflow: 'auto',
    boxShadow: '0 0 10px rgba(0,0,0,.2)',
    zIndex: 5
  }
}));

export default useStyles;