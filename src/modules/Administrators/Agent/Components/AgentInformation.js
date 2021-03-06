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
import Tooltip from '@material-ui/core/Tooltip';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TypographyWithClick = ({ children, onClick }) => {
    return <Typography variant="body1" style={{ textAlign: "center" }} onClick={onClick}>
        {children}
    </Typography>
}

const AgentInformation = () => {
    const [popUp, setPopUp] = useState(false)
    const [tableData, setTableData] = useState({
        PollingInterval1: 94,
        PollingInterval2: 57,
    })

    const { t } = useTranslation();

    const InputNumberValidation = (event) => {
        const { name, value } = event.target;
        setTableData((prevState) => {
            let percentageValue = parseInt(value);
            if (percentageValue > 9999) percentageValue = 9999;
            if (percentageValue < 0) percentageValue = 0;
            return {
                ...prevState,
                [name]: percentageValue,
            }
        })
    }

    const showPopUp = () => {
        setPopUp(true);
    }

    const Rows = [
        {
            id: 1,
            StatusId: "Running",
            Name: 'Sales',
            IP: "10.10.10.21",
            HostName: "myhost-101",
            Version: '1.0.1',
            StartDate: '2021/04/25 10:00:22',
            LastCollectDate: '2022-06-13 10:00:22',
            PollingInterval: <TextField
                fullWidth
                name="PollingInterval1"
                variant="outlined"
                className="AgentTextRight AgentTextField"
                size="small"
                type="number"
                value={tableData.PollingInterval1}
                onChange={InputNumberValidation}
            />,
            Action: '',
        },
        {
            id: 2,
            StatusId: "No response",
            Name: 'Marketing',
            IP: "10.10.20.33",
            HostName: "myhost-102",
            Version: '1.0.2',
            StartDate: '2021/11/21 10:00:22',
            LastCollectDate: '',
            PollingInterval: <TextField
                fullWidth
                name="PollingInterval2"
                variant="outlined"
                className="AgentTextRight AgentTextField"
                size="small"
                type="number"
                value={tableData.PollingInterval2}
                onChange={InputNumberValidation}
            />,
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
                <TextField
                    fullWidth
                    name="noticeUsageLevel"
                    className="AgentTextField"
                    variant="outlined"
                    size="small"
                    defaultValue={Rows.Name}
                />
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
                    <div className="d-flex f-align-center f-justify-between">
                        <Tooltip title={t('Pause')} placement='top-start'>
                            <Button
                                variant="contained"
                                className="iconButtons"
                            >
                                <NotStartedIcon />
                            </Button>
                        </Tooltip>
                        <Tooltip title={t('Resume')} placement='top-start'>
                            <Button
                                variant="contained"
                                className="Btn-Color iconButtons"
                            >
                                <PauseCircleFilledIcon />
                            </Button>
                        </Tooltip>
                        <Tooltip title={t('newPrinterdelete')} placement='top-start'>
                            <Button
                                variant="contained"
                                className="deleteBtn iconButtons"
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
                <Grid hasSelection={true} columns={columnConfig} rows={Rows} clickEvent={showPopUp} />
            </Paper>
            {popUp ? <SMTPSettings setClosePopUp={setPopUp} /> : ''}
        </>
    );
};

export default AgentInformation;