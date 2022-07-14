import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import "../view/ServerStyle.css";
import Select from "@material-ui/core/Select";
import { Button, MenuItem } from "@material-ui/core";
import "../../../../shared/Shared.css";

const SMPTSettings = () => {
    const { t } = useTranslation();
    const [secure, setSecure] = useState(0);
    const updateSecure = (event) => {
        setSecure(event.target.value);
    };

    return (
        <>
            <Paper elevation={4} >
                <div className="SMPTServerMainDiv">
                    <div className="SMPTInnerDivs mt-3">
                        <p >{t('Email Server * ')}</p>
                        <TextField
                            className="textfield"
                            style={{ width: '70%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                            value={'mail.myepsoft.com'}
                            disabled={true}
                        />
                    </div>
                    <div className="SMPTInnerDivs mt-3">
                        <p >{t('ID')}</p>
                        <TextField
                            className="textfield"
                            style={{ width: '70%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                            value={'developer7@myepsoft.com'}
                            disabled={true}
                        />
                    </div>
                    <div className="SMPTInnerDivs mt-3">
                        <p >{t('Password')}</p>
                        <div className="passwordDiv">
                            <TextField
                                type="password"
                                className="passwordTextField textfield"
                                name="noticeUsageLevel"
                                variant="outlined"
                                size="small"
                                value={'HimanshuSuratiya'}
                                disabled={true}
                            />
                            <TextField
                                type="password"
                                className="passwordTextField textfield"
                                name="noticeUsageLevel"
                                variant="outlined"
                                size="small"
                                value={'HimanshuSuratiya'}
                                disabled={true}
                            />
                        </div>
                    </div>
                    <div className="SMPTInnerDivs mt-3">
                        <p >{t('Default sender email * ')}</p>
                        <TextField
                            className="textfield"
                            style={{ width: '70%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                            value={'developer7@myepsoft.com'}
                            disabled={true}
                        />
                    </div>
                    <div className="SMPTInnerDivs mt-3">
                        <p >{t('Secure Type * ')}</p>
                        <Select
                            className="textfield"
                            value={secure}
                            onChange={updateSecure}
                            displayEmpty
                            variant="outlined"
                            style={{ height: "45px", width: "70%" }}
                            disabled={true}
                        >
                            <MenuItem value={0}>{t("processSelect")}</MenuItem>
                            <MenuItem value={1}>SSL</MenuItem>
                            <MenuItem value={2}>TLS</MenuItem>
                        </Select>
                    </div>
                    <div className="SMPTInnerDivs mt-3">
                        <p >{t('Port Number * ')}</p>
                        <TextField
                            className="textfield"
                            style={{ width: '70%', padding: '0px' }}
                            name="noticeUsageLevel"
                            variant="outlined"
                            size="small"
                            value={465}
                            disabled={true}
                        />
                    </div>
                    <div className="SMPTInnerDivs mt-3 mb-3">
                        <p >{t('')}</p>
                        <div className="passwordDiv">
                            <Button variant="contained" className="SMPT-Btn Test-Color">Test</Button>
                            <Button variant="contained" className="SMPT-Btn Btn-Color">Save</Button>
                        </div>
                    </div>
                </div>
            </Paper>
        </>
    );
};

export default SMPTSettings;