import React, { useState } from "react";
import '../view/Groupstyle.css'
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
import SelectDepart from "./SelectDepart";

const Modify = ({ setCloseModiPopUp }) => {
    const [selectDepartpopUp, setSelectDepartPopUp] = useState(false)
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
                                            {t("Modify")}
                                        </Typography>
                                        <IconButton>
                                            <CloseIcon onClick={() => { setCloseModiPopUp(false) }} />
                                        </IconButton>
                                    </div>
                                </DialogTitle>
                                <Divider />
                                <DialogContent className="mt-4">
                                    <TextField
                                        fullWidth
                                        label={t('processDepartmentName')}
                                        name="email"
                                        variant="outlined"
                                    />
                                    <div className="mt-6" style={{ display: 'flex', justifyContent: 'space-between', background: '', height: '55px' }}>
                                        <TextField
                                            style={{ width: '80%' }}
                                            variant='outlined'
                                            label={t("processUpperDepartment")}
                                        />
                                        <Button style={{ minWidth: '90px' }} className="Btn-Color" variant="contained" onClick={() => { setSelectDepartPopUp(!selectDepartpopUp) }}>Select</Button>
                                    </div>
                                    <TextareaAutosize
                                        className="mt-6"
                                        style={{ width: '100%', borderRadius: '5px', fontSize: '16px', paddingLeft: '12px' }}
                                        aria-label="minimum height"
                                        minRows={7}
                                        placeholder="Remark"
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <div className="p-4">
                                        <Button variant="contained" className="mr-4" onClick={() => { setCloseModiPopUp(false) }}>
                                            {t('settingsCancel')}
                                        </Button>
                                        <Button
                                            className="Btn-Color"
                                            variant="contained"
                                            disabled={false}
                                            onClick={() => { setCloseModiPopUp(false) }}
                                        >
                                            {t('Modify')}
                                        </Button>
                                    </div>
                                </DialogActions>
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
            {selectDepartpopUp ? <SelectDepart setCloseSelectDepartPopUp={setSelectDepartPopUp} /> : ''}
        </>
    );
};

export default Modify;