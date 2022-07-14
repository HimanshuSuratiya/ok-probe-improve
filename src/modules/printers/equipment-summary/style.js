import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  starIconPaper: {
    height: 80,
    width: 80,
  },

  startIcon:{
    borderRadius: '0.25rem',
    alignItems: 'center',
    display: 'flex',
    fontSize: '1.875rem',
    justifyContent: 'center',
    textAlign: 'center',
    width: 70,
  },

  isBookmark:{
    color: 'blue'
  },

  whiteIcon:{
    borderRadius: '0.25rem',
    alignItems: 'center',
    display: 'flex',
    fontSize: '1.875rem',
    justifyContent: 'center',
    textAlign: 'center',
    width: 70,
    color:'#fff'
  },

  mobTabg: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    },
  },

  tabPaper: {
    height: 80,
    width: "33%",
    [theme.breakpoints.down('xs')]: {
      width: "100%",
    },
  },

  usagePagePaper: {
    maxHeight: 444,
    overflowY: 'auto'
  },

  eventbox: {
    borderRadius:4,
    width: 70,
    height: 66,
    backgroundColor: "#17a2b8!important",
  },

  memoBox: {
    borderRadius:4,
    width: 70,
    height: 66,
    backgroundColor: "#28a745!important",
  },

  reportBox: {
    borderRadius:4,
    width: 70,
    height: 66,
  },

  deleteModal: {
    minWidth: 310,
    maxHeight: 250,
  },

  usagePageGrid:{
    maxHeight: 175,
    overflow: 'inherit'
  },

  detailButtonRoot:{
    backgroundColor:'rgba(0,0,0,.03)'
  },

  detailButtonLabel:{
    fontWeight:'bold'
  },

  iconSize:{
    fontSize:56,
    marginTop:4
  },

  warning: {
    color: '#28a745!important',
  },

  switch: {
    position: 'relative',
    display: 'inline-block',
    width: '90px',
    height: '34px',
    right: '-300px',
    top: '9px',
  },

  tablefixed:{

    overflow: 'inherit',
  },

  "@media (max-width: 767px)": {
    prienter_mainarea: {
      display: 'none!important'},
     },
}));

export default useStyles;
