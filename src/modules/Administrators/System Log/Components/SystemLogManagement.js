import React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import { Grid } from "shared/components";
import Paper from "@material-ui/core/Paper";

const SystemLogManagement = () => {
    const { t } = useTranslation();

    const Rows = [
        {
            id: 'System',
            clientRegionBranch: "All",
            StatusId: "Consumable Collector",
            sN: "",
            Date: '2022-04-25 18:00:11',
            DetailedInformation: 'END TASK',
        },
        {
            id: 'Admin',
            clientRegionBranch: "All/Group A",
            StatusId: "Device Group Management(Create)",
            sN: "",
            Date: '2022-04-25 17:36:59',
            DetailedInformation: 'Group Name : Group A,Group Description : Hello,Manager :',
        },
        {
            id: 'System',
            clientRegionBranch: "All",
            StatusId: "Consumable Collector",
            sN: "",
            Date: '2022-04-25 18:00:11',
            DetailedInformation: 'END TASK',
        },
        {
            id: 'System',
            clientRegionBranch: "All",
            StatusId: "Consumable Collector",
            sN: "",
            Date: '2022-04-25 18:00:11',
            DetailedInformation: 'END TASK',
        },
        {
            id: 'Admin',
            clientRegionBranch: "All",
            StatusId: "Device(Delete completely)",
            sN: "28S3B1BH60001WF",
            Date: '2022-04-25 16:58:38',
            DetailedInformation: 'True',
        },
    ];

    const columnConfig = [
        {
            id: "_id",
            fieldName: "_id",
            label: t("ID"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1">
                    {Rows.id}
                </Typography>
            ),
        },
        {
            id: "client_region_branch",
            fieldName: "client_region_branch",
            label: t("Client/Region/ Branch"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1" >
                    {Rows.clientRegionBranch}
                </Typography>
            ),
        },
        {
            id: "Status_Id",
            fieldName: "Status_Id",
            label: t("processStatus"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1">
                    {Rows.StatusId}
                </Typography>
            ),
        },
        {
            id: "s_N",
            field: "s_N",
            label: t("S/N"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1">
                    {Rows.sN}
                </Typography>
            ),
        },
        {
            id: "_date",
            field: "_date",
            label: t("Date"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1">
                    {Rows.Date}
                </Typography>
            ),
        },
        {
            id: "detailed_Information",
            field: "detailed_Information",
            label: t("Detailed Information"),
            canSort: true,
            render: (Rows) => (
                <Typography variant="body1">
                    {Rows.DetailedInformation}
                </Typography>
            ),
        },
    ];

    return (
        <>
            <div className="d-flex f-align-center f-justify-between mb-8">
                <Typography variant="h4">{t("System Log Management")}</Typography>
            </div>
            <Paper elevation={4}>
                <Grid hasSelection={false} columns={columnConfig} rows={Rows} />
            </Paper>
        </>
    );
};

export default SystemLogManagement;