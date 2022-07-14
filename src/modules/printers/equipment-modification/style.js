import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles =  makeStyles(theme => ({
  colorLink: {
    color: '#007bff',
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  waitingModal: {
    minWidth: 310,
    maxHeight: 250,
  },
  backgroundColor: {
    backgroundColor:'#f5f6f8'

  },
  avtarImage: {
    width: 96,
    height: 96,
    border: `1px solid ${theme.palette.divider}`,
  },
  companySearch: {
    '& li:first-child': {
      opacity: 1,
      borderBottom: '1px solid #ccc'
    }
  }
}));

export default useStyles;