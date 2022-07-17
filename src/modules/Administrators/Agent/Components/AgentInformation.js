import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import { Grid } from "shared/components";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "../view/AgentStyle.css";
import "../../../../shared/Shared.css";
import SMTPSettings from "./SMTPSettings";
import NotStartedIcon from '@mui/icons-material/NotStarted';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Tooltip from '@material-ui/core/Tooltip';

const TypographyWithClick = ({ children, onClick }) => {
    return <Typography variant="body1" style={{ textAlign: "center" }} onClick={onClick}>
        {children}
    </Typography>
}

const AgentInformation = () => {
    const [popUp, setPopUp] = useState(false)
    const { t } = useTranslation();

    const Rows = [
        {
            id: 1,
            StatusId: "Running",
            Name: <TextField
                style={{ width: '100%' }}
                name="noticeUsageLevel"
                className="AgentTextField"
                variant="outlined"
                size="small"
                defaultValue={'Sales'} />
            ,
            IP: "10.10.10.21",
            HostName: "myhost-101",
            Version: '1.0.1',
            StartDate: '2021/04/25 10:00:22',
            LastCollectDate: '2022-06-13 10:00:22',
            PollingInterval: <TextField
                style={{ width: '100%' }}
                name="noticeUsageLevel"
                variant="outlined"
                className="AgentTextRight AgentTextField"
                size="small"
                type="number"
                defaultValue={10} />
            ,
            Action: '',
        },
        {
            id: 2,
            StatusId: "No response",
            Name: <TextField
                style={{ width: '100%', margin: '0px' }}
                name="noticeUsageLevel"
                className="AgentTextField"
                variant="outlined"
                size="small"
                defaultValue={'Marketing'} />
            ,
            IP: "10.10.20.33",
            HostName: "myhost-102",
            Version: '1.0.2',
            StartDate: '2021/11/21 10:00:22',
            LastCollectDate: '',
            PollingInterval: <TextField
                style={{ width: '100%', }}
                name="noticeUsageLevel"
                variant="outlined"
                className="AgentTextRight AgentTextField"
                size="small"
                type="number"
                defaultValue={30} />
            ,
            Action: '',
        },
    ];

    const columnConfig = [
        {
            id: "Status_Id",
            fieldName: "Status_Id",
            label: t("processStatus"),
            canSort: true,
            render: (Rows) => (
                <TypographyWithClick onClick={() => { setPopUp(!popUp) }}>
                    {Rows.StatusId}
                </TypographyWithClick>
            ),
        },
        {
            id: "_Name",
            fieldName: "_Name",
            label: t("Name"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" >
                    {Rows.Name}
                </Typography>
            ),
        },
        {
            id: "_IP",
            fieldName: "_IP",
            label: t("IP"),
            canSort: true,
            render: (Rows) => (
                <TypographyWithClick onClick={() => { setPopUp(!popUp) }}>
                    {Rows.IP}
                </TypographyWithClick>
            ),
        },
        {
            id: "host_Name",
            field: "host_Name",
            label: t("Host Name"),
            canSort: true,
            render: (Rows) => (
                <TypographyWithClick onClick={() => { setPopUp(!popUp) }}>
                    {Rows.HostName}
                </TypographyWithClick>
            ),
        },
        {
            id: "_version",
            field: "_version",
            label: t("Version"),
            canSort: true,
            render: (Rows) => (
                <TypographyWithClick onClick={() => { setPopUp(!popUp) }}>
                    {Rows.Version}
                </TypographyWithClick>
            ),
        },
        {
            id: "start_Date",
            field: "start_Date",
            label: t("Start Date"),
            canSort: true,
            render: (Rows) => (
                <TypographyWithClick onClick={() => { setPopUp(!popUp) }}>
                    {Rows.StartDate}
                </TypographyWithClick>
            ),
        },
        {
            id: "last_collect_date",
            fieldName: "last_collect_date",
            label: t("Last Collect Date"),
            canSort: true,
            render: (Rows) => (
                <TypographyWithClick onClick={() => { setPopUp(!popUp) }}>
                    {Rows.LastCollectDate}
                </TypographyWithClick>
            ),
        },
        {
            id: "polling_interval",
            field: "polling_interval",
            label: t("Polling Interval (Minutes)"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" >
                    {Rows.PollingInterval}
                </Typography>
            ),
        },
        {
            id: "_action",
            field: "_action",
            label: t("Action"),
            render: (row) => {
                return (
                    <div className="d-flex" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                        <Tooltip title={t('Pause')} placement='top-start'>
                            <Button
                                style={{ margin: '0px 6px', padding: '0px', minWidth: '38px' }}
                                variant="contained"
                                className="pauseBtn"
                            >
                                <NotStartedIcon />
                            </Button>
                        </Tooltip>
                        <Tooltip title={t('Resume')} placement='top-start'>
                            <Button
                                style={{ margin: '0px 6px', padding: '0px', minWidth: '38px' }}
                                variant="contained"
                                className="Btn-Color"
                            >
                                <PauseCircleFilledIcon />
                            </Button>
                        </Tooltip>
                        <Tooltip title={t('newPrinterdelete')} placement='top-start'>
                            <Button
                                style={{ margin: '0px 6px', padding: '0px', minWidth: '38px' }}
                                variant="contained"
                                className="deleteBtn"
                            >
                                <DeleteForeverIcon />
                            </Button>
                        </Tooltip>
                    </div>
                )
            }
        },
    ];

    return (
        <>
            <Paper elevation={4}>
                <Grid hasSelection={true} columns={columnConfig} rows={Rows} />
            </Paper>
            {popUp ? <SMTPSettings setClosePopUp={setPopUp} /> : ''}
        </>
    );
};

export default AgentInformation;