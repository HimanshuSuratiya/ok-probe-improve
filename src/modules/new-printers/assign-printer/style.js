import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  colorLink: {
    color: "#007bff",
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  deleteModal: {
    minWidth: 310,
    maxHeight: 300,
  },
  companySearch: {
    '& li:first-child': {
      opacity: 1,
      borderBottom: '1px solid #ccc'
    }
  }
}));

export default useStyles;
