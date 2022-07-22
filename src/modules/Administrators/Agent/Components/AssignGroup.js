import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import "../view/AgentStyle.css";
import DepartmentSearch from "./DepartmentSearch";
import "../../../../shared/Shared.css";
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const AssignGroup = () => {
    const [popUp, setPopUp] = useState(false);
    const [id, setId] = useState();
    const [departmentList, setDepartmentList] = useState(null);
    const { t } = useTranslation();

    const data = [
        {
            id: 1,
            name: 'First',
            ip: '10.10.10.10',
            hostName: 'Admin'
        },
        {
            id: 2,
            name: 'Second',
            ip: '10.10.10.20',
            hostName: 'Admin-2'
        },
        {
            id: 3,
            name: 'Third',
            ip: '10.10.10.30',
            hostName: 'Admin-3'
        },
        {
            id: 4,
            name: 'Fourth',
            ip: '10.10.10.40',
            hostName: 'Admin-4'
        },
        {
            id: 5,
            name: 'Fifth',
            ip: '10.10.10.50',
            hostName: 'Admin-5'
        },
    ]

    const SecondTableData = [
        {
            id: 1,
            deptName: ['Dept-1', 'Dept-2']
        },
        {
            id: 2,
            deptName: ['Dept-1']
        },
        {
            id: 3,
            deptName: ['Dept-1', 'Dept-2', 'Dept-3']
        },
        {
            id: 4,
            deptName: ['Dept-1', 'Dept-2', 'Dept-3', 'Dept-4', 'Dept-5', 'Dept-6']
        },
        {
            id: 5,
            deptName: ['Dept-1']
        },
    ]

    const SendDateTosecond = (passingId) => {
        SecondTableData.filter((item) => {
            if (item.id === passingId) {
                setDepartmentList([item])
            }
        })
    }

    const SelectedRow = (passingId) => {
        if (id === passingId) {
            setId()
        }
        else {
            setId(passingId)
        }
    }

    return (
        <>
            <Paper elevation={4}>
                <div className="divideParentDiv">
                    <div className="divideDiv1">
                        <div className="innerDivs">
                            <BackupTableIcon />
                            <p className="ml-2">Agent</p>
                        </div>
                        <div class="agent-table-main-area">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th class="ip-border-main-area">IP</th>
                                        <th>Hostname</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => {
                                        return (
                                            <tr className={`${item.id === id ? 'activeSelectColor' : ''}`} onClick={() => { SelectedRow(item.id, item.name); SendDateTosecond(item.id) }}>
                                                <td>{item.name}</td>
                                                <td>{item.ip}</td>
                                                <td>{item.hostName}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="divideDiv2">
                        <div className="innerDivs">
                            <BackupTableIcon />
                            <p className="ml-2">Assigned Department</p>
                            <Tooltip title="Add" placement='top-start'>
                                <Button
                                    className={`AgentAddDiv AgentButtonSimilarWidth ${id ? 'Btn-Color' : ''}`}
                                    variant="contained"
                                    disabled={id ? false : true}
                                    onClick={() => { setPopUp(!popUp) }}
                                >
                                    <AddIcon />
                                    Add
                                </Button>
                            </Tooltip>
                        </div>
                        <div class="agent-table-main-area SecondDiv">
                            <table>
                                <thead>
                                    {id ?
                                        <tr>
                                            <th>ID</th>
                                            <th class="ip-border-main-area-2">Name</th>
                                            <th style={{ textAlign: 'center' }}>Action</th>
                                        </tr> :
                                        ''}
                                </thead>
                                <tbody>
                                    {id ? departmentList && departmentList.map((items) => {
                                        return (
                                            items.deptName.map((departs, index) => {
                                                return (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{departs}</td>
                                                        <td className="btntd">
                                                            <Tooltip title="Delete" placement='top-start'>
                                                                <Button
                                                                    className="AgentDeleteDiv"
                                                                    variant="contained"
                                                                >
                                                                    <DeleteForeverIcon />
                                                                </Button>
                                                            </Tooltip>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        )
                                    }) : ''}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Paper>
            {popUp ? <DepartmentSearch setClosePopUp={setPopUp} /> : ''}
        </>
    );
};

export default AssignGroup;