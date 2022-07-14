import React, { useState } from "react";
// import '../view/Groupstyle.css'
import ".././../Group Management/view/Groupstyle.css";
import Paper from "@material-ui/core/Paper";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import { useTranslation } from "react-i18next";
import { Button } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Divider } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { DialogActions, DialogContent, IconButton } from '@material-ui/core';
import "../../../../shared/Shared.css";

const SMTPSettings = ({ setClosePopUp }) => {
    const { t } = useTranslation();
    return (
        <>
            <Paper>
                <div style={{ position: 'fixed', zIndex: '1300', inset: '0px' }}>
                    <div className="MuiBackdrop-root">
                        <div className="MuiDialog-container MuiDialog-scrollPaper" style={{ width: '100%', height: '100%', backgroundColor: '' }}>
                            <div style={{ height: '560px' }} className="MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded setWidth">
                                <DialogTitle>
                                    <div className="d-flex f-align-center f-justify-between">
                                        <Typography variant="h5">
                                            {t("SNMP Settings")}
                                        </Typography>
                                        <IconButton>
                                            <CloseIcon onClick={() => { setClosePopUp(false) }} />
                                        </IconButton>
                                    </div>
                                </DialogTitle>
                                <Divider />
                                <DialogContent className="mt-2">
                                    <div style={{ background: '', height: '56px', width: '100%', display: 'flex', alignItems: 'center' }}>
                                        <p style={{ margin: '0px', fontSize: '16px', width: '35%' }}>{t('SNMP Version')}</p>
                                        <form>
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label style={{ fontSize: '16px' }} for="html">SNMPv1/v2</label>
                                            <input style={{ marginLeft: '20px' }} type="radio" id="css" name="fav_language" value="CSS" />
                                            <label style={{ fontSize: '16px' }} for="html">SNMPv3</label>
                                        </form>
                                    </div>
                                    <TextField
                                        className="mt-4"
                                        fullWidth
                                        label={t('SMTP Port')}
                                        name="email"
                                        value={'161'}
                                        variant="outlined"
                                    />
                                    <TextField
                                        className="mt-4"
                                        fullWidth
                                        label={t('SMTP Community')}
                                        name="email"
                                        value={'Public'}
                                        variant="outlined"
                                    />
                                    <TextField
                                        className="mt-4"
                                        fullWidth
                                        label={t('SMTP Collecting Retries')}
                                        name="email"
                                        value={'1'}
                                        variant="outlined"
                                    />
                                    <TextField
                                        className="mt-4"
                                        fullWidth
                                        label={t('SMTP Collecting Timeout')}
                                        name="email"
                                        value={'10000'}
                                        variant="outlined"
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <div className="p-4">
                                        <Button variant="contained" className="mr-4" onClick={() => { setClosePopUp(false) }}>
                                            {t('settingsCancel')}
                                        </Button>
                                        <Button
                                            className="Btn-Color"
                                            variant="contained"
                                            disabled={false}
                                            onClick={() => { setClosePopUp(false) }}
                                        >
                                            {t('Save')}
                                        </Button>
                                    </div>
                                </DialogActions>
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
        </>
    );
};

export default SMTPSettings;