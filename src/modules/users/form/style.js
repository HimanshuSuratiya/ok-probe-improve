import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles =  makeStyles(theme => ({
  paper: {
    width: 550,
    height: 560,
  },
  backdrop: {
    zIndex: 99999,
    color: '#fff',
  },
  approveBtn: {
    background: '#28a745'
  }
}));

export default useStyles;