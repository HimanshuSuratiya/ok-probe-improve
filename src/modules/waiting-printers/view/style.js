import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles =  makeStyles(theme => ({
    deleteModal: {
        minWidth: 310,
        maxHeight: 250,
        // backgroundColor: "#ffc107!important",
      },

      tableCell:{
        padding: '5px 10px 5px 10px',
      },

      btnprinter:{
        height:'38px !important',
      },
     
}));

export default useStyles;