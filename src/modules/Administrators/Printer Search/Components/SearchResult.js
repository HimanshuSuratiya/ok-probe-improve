import React from "react";
import {Button} from "@material-ui/core";
import {Grid} from "shared/components";
import "../view/PrinterSearchstyle.css";
import Typography from "@material-ui/core/Typography";
import {useTranslation} from "react-i18next";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import "../../../../shared/Shared.css";

const noop = () => { };
const SearchResult = ({ match, getUnassignDeviceCount = noop }) => {
  const {t} = useTranslation();
  const history = useHistory()
  const columnConfig = [
    {
      id: "s_No",
      fieldName: "s_No",
      label: t("processNo"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{textAlign: "center"}}>
          {Rows.sNo}
        </Typography>
      ),
    },
    {
      id: "printer_Model",
      field: "printer_Model",
      label: t("processPrinterModel"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{textAlign: "center"}}>
          {Rows.serialnumber}
        </Typography>
      ),
    },
    {
      id: "serial_Number",
      fieldName: "serial_Number",
      label: t("processSerialNumber"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{textAlign: "center"}}>
          {Rows.modelname}
        </Typography>
      ),
    },
    {
      id: "Ip",
      field: "Ip",
      label: t("processIp"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{textAlign: "center"}}>
          {Rows.ip}
        </Typography>
      ),
    },
    {
      id: "host_Name",
      field: "host_Name",
      label: t("processHostName"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{textAlign: "center"}}>
          {Rows.printername}
        </Typography>
      ),
    },
    {
      id: "Status_Id",
      fieldName: "Status_Id",
      label: t("processStatus"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{textAlign: "center"}}>
          {Rows.status}
        </Typography>
      ),
    },
  ];

  const Rows = [
    {
      sNo: 1,
      id: 1,
      serialnumber: "Samsung x 4300 Series",
      modelname: "SEC30CDA7634013",
      ip: "192.168.1.233",
      printername: "Samsung",
      status: "complete",
    },
    {
      sNo: 2,
      id: 2,
      serialnumber: "Samsung x 4300 Series",
      modelname: "SEC30CDA7634013",
      ip: "192.168.1.233",
      printername: "Samsung",
      status: "Incomplete",
    },
    {
      sNo: 3,
      id: 3,
      serialnumber: "Samsung x 4300 Series",
      modelname: "SEC30CDA7634013",
      ip: "192.168.1.233",
      printername: "Samsung",
      status: "complete",
    },
    {
      sNo: 4,
      id: 4,
      serialnumber: "Samsung x 4300 Series",
      modelname: "SEC30CDA7634013",
      ip: "192.168.1.233",
      printername: "Samsung",
      status: "Incomplete",
    },
    {
      sNo: 5,
      id: 5,
      serialnumber: "Samsung x 4300 Series",
      modelname: "SEC30CDA7634013",
      ip: "192.168.1.233",
      printername: "Samsung",
      status: "complete",
    },
  ];

  const findSelectedRow = () => {
    var SelectedRows = [];
    SelectedRows = JSON.parse(localStorage.getItem('SelectRow'));
    console.log('SelectedRows');
    if(SelectedRows === null){}
    else{
      if(SelectedRows.length === 1){
        history.push(`${match.path}/register-printer`)
      }
      if(SelectedRows.length >= 2){
        history.push(`${match.path}/printers-detail`)
      }
    }
  }
  
  return (
    <>
      <div className="d-flex f-align-center f-justify-between mb-8">
        <Typography variant="h4">{t("processSearchResult")}</Typography>
      </div>
      <Paper elevation={4}>
        <Grid columns={columnConfig} rows={Rows}/>
      </Paper>
      <div className="divBtn">
        <Button
          variant="contained"
          style={{marginRight: "20px", backgroundColor:'#f44336' ,color:'white'}}
          type="submit"
        >
          {t("processDeleteBtn")}
        </Button>
        <Button
          variant="contained"
          className="Btn-Color"
          type="submit"
          onClick={()=>{findSelectedRow()}}
        >
          {t("processRegisterBtn")}
        </Button>
      </div>
    </>
  );
};

export default SearchResult;
