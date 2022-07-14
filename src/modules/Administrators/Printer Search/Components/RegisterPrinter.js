import React, { useState } from "react";
import "../view/PrinterSearchstyle.css";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import { Button, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "../../../../shared/Shared.css";
import { Divider } from '@material-ui/core';
import SelectedDepartment from "./SelectedDepartment";
import {Datepicker } from "shared/components";
import { useHistory } from "react-router-dom";

const EndDefaultDate = () => {
  const currentyear = new Date().getFullYear();
  const newAddDate = new Date()
  newAddDate.setFullYear(currentyear + 1)
  return newAddDate
}

const RegisterPrinter = () => {
  const [endcontract, setEndContract] = useState(EndDefaultDate());
  const [popUp, setPopUp] = useState(false)
  const history = useHistory();
  const { t } = useTranslation();
  
  return (
    <>
      <div className="d-flex f-align-center f-justify-between mb-8">
        <Typography variant="h4">{t("processRegisterPrinter")}</Typography>
      </div>
      <Paper elevation={4} className="p-4">
        <div className='wraplayout'>
          <TextField
            name="noticeNoUse"
            fullWidth
            variant="outlined"
            size="small"
            label={t("Printer Model")}
            value="Brother MFC-LS700DW services"
            style={{backgroundColor:'#f5f6f8'}}
            disabled={true}
          />
          <TextField
            name="noticeNoUse"
            className='mt-6'
            fullWidth
            variant="outlined"
            size="small"
            label={t("Serial Number")}
            value="RJF9800293"
            style={{backgroundColor:'#f5f6f8'}}
            disabled={true}
          />
          <Divider className="mt-6" />
          <div className="mt-6" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              name='noticeNoUse'
              style={{ width: '80%' }}
              fullWidth
              variant='outlined'
              size='small'
              label={t('Department Name')}
            />
            <Button style={{ minWidth: '90px', marginLeft: '5px' }} className="Btn-Color" variant="contained" onClick={() => { setPopUp(!popUp) }}>Select</Button>
          </div>
          <TextField
            name="noticeNoUse"
            className='mt-6'
            fullWidth
            variant="outlined"
            size="small"
            label={t("Location")}
          />
          <TextField
            name="noticeNoUse"
            fullWidth
            className="mt-6"
            variant="outlined"
            size="small"
            label={t("Printer Information")}
            value="Brother MFC-LS700DW services"
            style={{backgroundColor:'#f5f6f8'}}
            disabled={true}
          />
          <Divider className="mt-6 mb-6" />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Datepicker
              className="set-default-date"
              label={t("Start of contract")}
              selected={ new Date()}
            />
            <Datepicker
              className="set-default-date"
              label={t("Contract Termination")}
              selected={endcontract}
            />
          </div>
          <TextField
            name="noticeNoUse"
            fullWidth
            className="mt-6"
            variant="outlined"
            size="small"
            label={t("Memo")}
          />
          <div className="d-flex f-align-center mt-6">
            <Button 
              fullWidth 
              className="mr-10" 
              style={{height: '40.3px'}}
              size="large"
              variant="contained"
              onClick={() => {
                history.goBack();
              }}
            >
              {t("settingsCancel")}
            </Button>
            <Button
              fullWidth
              className="ml-10 Btn-Color"
              size="large"
              variant="contained"
            >
              {t("settingsSave")}
            </Button>
          </div>
        </div>
      </Paper>
      {popUp ? <SelectedDepartment setClosePopUp={setPopUp}/> : ''}
    </>
  );
};

export default RegisterPrinter;
