import React, { useState } from "react";
import ".././../Group Management/view/Groupstyle.css";
import Paper from "@material-ui/core/Paper";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import { useTranslation } from "react-i18next";
import { Button, MenuItem } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { Divider } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { DialogActions, DialogContent, IconButton } from '@material-ui/core';
import "../../../../shared/Shared.css";

const SMTPSettings = ({ setClosePopUp }) => {
    const { t } = useTranslation();
    const [authAlgorithm, setAuthAlgorithm] = useState(0);
    const [privacyAlgorithm, setPrivacyAlgorithm] = useState(0);
    const [checkedVersion3, setCheckedVersion3] = useState(false);

    const updateAuthAlgorithm = (event) => {
        setAuthAlgorithm(event.target.value);
    };

    const updatePrivacyAlgorithm = (event) => {
        setPrivacyAlgorithm(event.target.value);
    }

    const CheckedEventVersion = (event) => {
        if (event.target.checked) {
            setCheckedVersion3(true)
        }
    }
    
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
                                            <input type="radio" id="version-2" name="version" value="version-2" defaultChecked onClick={() => { setCheckedVersion3(false) }} />
                                            <label style={{ fontSize: '16px' }} for="version">SNMPv1/v2</label>
                                            <input style={{ marginLeft: '20px' }} type="radio" id="version-3" name="version" value="version-3" onChange={(e) => { CheckedEventVersion(e) }} />
                                            <label style={{ fontSize: '16px' }} for="version">SNMPv3</label>
                                        </form>
                                    </div>
                                    <TextField
                                        className="mt-4"
                                        fullWidth
                                        label={t('SNMP Port')}
                                        name="email"
                                        defaultValue={'161'}
                                        variant="outlined"
                                    />
                                    <TextField
                                        className="mt-4"
                                        fullWidth
                                        label={t('SNMP Community')}
                                        name="email"
                                        defaultValue={'Public'}
                                        variant="outlined"
                                    />
                                    <TextField
                                        className="mt-4"
                                        fullWidth
                                        label={t('SNMP Collecting Retries')}
                                        name="email"
                                        defaultValue={'1'}
                                        variant="outlined"
                                    />
                                    <TextField
                                        className="mt-4"
                                        fullWidth
                                        label={t('SNMP Collecting Timeout')}
                                        name="email"
                                        defaultValue={'10000'}
                                        variant="outlined"
                                    />
                                    <TextField
                                        className="mt-4"
                                        disabled={checkedVersion3 ? '' : true}
                                        style={{ backgroundColor: `${checkedVersion3 ? '' : '#f5f6f8'}` }}
                                        fullWidth
                                        label={t('USM User')}
                                        name="email"
                                        defaultValue={'epsoft'}
                                        variant="outlined"
                                    />
                                    <Select
                                        className="mt-4"
                                        value={authAlgorithm}
                                        fullWidth
                                        onChange={updateAuthAlgorithm}
                                        displayEmpty
                                        variant="outlined"
                                        disabled={checkedVersion3 ? '' : true}
                                        style={{ backgroundColor: `${checkedVersion3 ? '' : '#f5f6f8'}` }}
                                    >
                                        <MenuItem value={0}>{t("Auth Algorithm")}</MenuItem>
                                        <MenuItem value={'MD5'}>MD5</MenuItem>
                                        <MenuItem value={'SHA'}>SHA</MenuItem>
                                        <MenuItem value={'SHA224'}>SHA224</MenuItem>
                                        <MenuItem value={'SHA256'}>SHA256</MenuItem>
                                        <MenuItem value={'SHA384'}>SHA384</MenuItem>
                                        <MenuItem value={'SHA512'}>SHA512</MenuItem>
                                    </Select>
                                    <TextField
                                        className="mt-4"
                                        fullWidth
                                        label={t('Auth Password')}
                                        disabled={checkedVersion3 ? '' : true}
                                        style={{ backgroundColor: `${checkedVersion3 ? '' : '#f5f6f8'}` }}
                                        name="email"
                                        type="password"
                                        defaultValue={'HimanshuSuratiya'}
                                        variant="outlined"
                                    />
                                    <Select
                                        className="mt-4"
                                        value={privacyAlgorithm}
                                        fullWidth
                                        onChange={updatePrivacyAlgorithm}
                                        displayEmpty
                                        disabled={checkedVersion3 ? '' : true}
                                        style={{ backgroundColor: `${checkedVersion3 ? '' : '#f5f6f8'}` }}
                                        variant="outlined"
                                    >
                                        <MenuItem value={0}>{t("Privacy Algorithm")}</MenuItem>
                                        <MenuItem value={'DES'}>DES</MenuItem>
                                        <MenuItem value={'AES'}>AES</MenuItem>
                                        <MenuItem value={'AES192'}>AES192</MenuItem>
                                        <MenuItem value={'AES256'}>AES256</MenuItem>
                                        <MenuItem value={'3DES'}>3DES</MenuItem>
                                    </Select>
                                    <TextField
                                        className="mt-4"
                                        fullWidth
                                        label={t('Privacy Password')}
                                        disabled={checkedVersion3 ? '' : true}
                                        style={{ backgroundColor: `${checkedVersion3 ? '' : '#f5f6f8'}` }}
                                        name="email"
                                        type="password"
                                        defaultValue={'HimanshuSuratiya'}
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