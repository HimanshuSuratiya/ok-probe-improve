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

const Add = ({ setClosePopUp }) => {
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
                                            {t("Add")}
                                        </Typography>
                                        <IconButton>
                                            <CloseIcon onClick={() => { setClosePopUp(false) }} />
                                        </IconButton>
                                    </div>
                                </DialogTitle>
                                <Divider />
                                <DialogContent className="mt-4">
                                    <TextField
                                        style={{ marginBottom: '10px' }}
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
                                        style={{ width: '100%', marginTop: '30px', borderRadius: '5px', fontSize: '16px', paddingLeft: '12px' }}
                                        aria-label="minimum height"
                                        minRows={7}
                                        placeholder="Remark"
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
                                            {t('Add')}
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

export default Add;