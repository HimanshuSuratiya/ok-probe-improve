import React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import { Grid } from "shared/components";
import Paper from "@material-ui/core/Paper";
import { Route } from 'react-router-dom';

const TypographyWithClick = ({ children, onClick }) => {
    return <Typography variant="body1" style={{ textAlign: "center" }} onClick={onClick}>
        {children}
    </Typography>
}

const noop = () => { };
const Tabel = ({ match, getUnassignDeviceCount = noop }) => {
    const { t } = useTranslation();

    const Rows = [
        {
            sNo: 1,
            searchDate: "06-04-2022 11:53:15 AM",
            registrationIp: "192.168.1.101 ~ 192.168.1.234",
            normalDetected: 1,
            abnormalDetected: 10,
            notDetectedNo: "Complete",
            StatusId: "	Complete",
        },
        {
            sNo: 2,
            searchDate: "09-05-2022 12:33:15 AM",
            registrationIp: "192.168.3.401 ~ 192.178.7.234",
            normalDetected: 3,
            abnormalDetected: 25,
            notDetectedNo: "InComplete",
            StatusId: "InComplete",
        },
        {
            sNo: 3,
            searchDate: "16-06-2022 02:53:15 PM",
            registrationIp: "192.268.1.101 ~ 192.768.1.333",
            normalDetected: 65,
            abnormalDetected: 8,
            notDetectedNo: "Complete",
            StatusId: "	Complete",
        },
        {
            sNo: 4,
            searchDate: "06-04-2022 11:53:15 AM",
            registrationIp: "192.368.1.312 ~ 192.182.6.347",
            normalDetected: 23,
            abnormalDetected: 34,
            notDetectedNo: "Complete",
            StatusId: "	InComplete",
        },
        {
            sNo: 5,
            searchDate: "06-04-2022 11:53:15 AM",
            registrationIp: "192.178.9.101 ~ 192.368.2.334",
            normalDetected: 0,
            abnormalDetected: 75,
            notDetectedNo: "InComplete",
            StatusId: "	Complete",
        },
    ];

    const columnConfig = [
        {
            id: "s_No",
            fieldName: "s_No",
            label: t("processNo"),
            canSort: true,
            render: (Rows) => (
                <Route render={({ history }) => (
                    <TypographyWithClick onClick={() => { console.log(match.path); history.push(`${match.path}/search-result`) }}>
                        {Rows.sNo}
                    </TypographyWithClick>
                )} />
            ),
        },
        {
            id: "search_Date",
            fieldName: "search_Date",
            label: t("processSearchDate"),
            canSort: true,
            render: (Rows) => (
                <Route render={({ history }) => (
                    <TypographyWithClick onClick={() => { history.push(`${match.path}/search-result`) }}>
                        {Rows.searchDate}
                    </TypographyWithClick>
                )} />
            ),
        },
        {
            id: "registration_Ip",
            field: "registration_Ip",
            label: t("processRegistration"),
            canSort: true,
            render: (Rows) => (
                <Route render={({ history }) => (
                    <TypographyWithClick onClick={() => { history.push(`${match.path}/search-result`) }}>
                        {Rows.registrationIp}
                    </TypographyWithClick>
                )} />
            ),
        },
        {
            id: "detected_No",
            field: "detected_No",
            label: t("processNormalDetected"),
            canSort: true,
            render: (Rows) => (
                <Route render={({ history }) => (
                    <TypographyWithClick onClick={() => { history.push(`${match.path}/search-result`) }}>
                        {Rows.normalDetected}
                    </TypographyWithClick>
                )} />
            ),
        },
        {
            id: "detected_No",
            field: "detected_No",
            label: t("processAbnormalDetected"),
            canSort: true,
            render: (Rows) => (
                <Route render={({ history }) => (
                    <TypographyWithClick onClick={() => { history.push(`${match.path}/search-result`) }}>
                        {Rows.abnormalDetected}
                    </TypographyWithClick>
                )} />
            ),
        },
        {
            id: "notDetected_No",
            fieldName: "notDetected_No",
            label: t("processNotDetected"),
            canSort: true,
            render: (Rows) => (
                <Route render={({ history }) => (
                    <TypographyWithClick onClick={() => { history.push(`${match.path}/search-result`) }}>
                        {Rows.notDetectedNo}
                    </TypographyWithClick>
                )} />
            ),
        },
        {
            id: "Status_Id",
            fieldName: "Status_Id",
            label: t("processStatus"),
            canSort: true,
            render: (Rows) => (
                <Route render={({ history }) => (
                    <TypographyWithClick onClick={() => { history.push(`${match.path}/search-result`) }}>
                        {Rows.StatusId}
                    </TypographyWithClick>
                )} />
            ),
        },
    ];

    return (
        <>

            <div className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("sidebarSearchHistory")}</Typography>
            </div>
            <Paper elevation={4}>
                <Grid hasSelection={false} columns={columnConfig} rows={Rows} />
            </Paper>

        </>
    );
};

export default Tabel;