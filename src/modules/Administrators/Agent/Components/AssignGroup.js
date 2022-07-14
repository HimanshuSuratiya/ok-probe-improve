import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
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
    const [popUp, setPopUp] = useState(false)
    const { t } = useTranslation();
    return (
        <>
            <Paper elevation={4}>
                <div className="divideParentDiv">
                    <div className="divideDiv1">
                        <div className="innerDivs">
                            <BackupTableIcon />
                            <p style={{ marginLeft: '12px' }}>Agent</p>
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
                                    <tr>
                                        <td>Selexp</td>
                                        <td>Selexp</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Selexp</td>
                                        <td>Selexp</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="divideDiv2">
                        <div className="innerDivs">
                            <BackupTableIcon />
                            <p style={{ marginLeft: '12px' }}>Assigned Department</p>
                            <Button
                                className="AgentAddDiv Btn-Color"
                                style={{ height: '46px', width: '160px', marginLeft: '8px' }}
                                variant="contained"
                                onClick={() => { setPopUp(!popUp) }}
                            >
                                <AddIcon />
                                Add
                            </Button>
                        </div>
                        <div class="agent-table-main-area SecondDiv">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th class="ip-border-main-area-2">Name</th>
                                        <th style={{ textAlign: 'center' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Selexp</td>
                                        <td>Selexp</td>
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
                                    <tr>
                                        <td>Selexp</td>
                                        <td>Selexp</td>
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
                                    <tr >
                                        <td>Group C</td>
                                        <td>Group C</td>
                                        <td className="btntd">
                                            <Tooltip title="Delete" placement='top-start'>
                                                <Button
                                                    title="Delete"
                                                    className="AgentDeleteDiv"
                                                    variant="contained"
                                                >
                                                    <DeleteForeverIcon />
                                                </Button>
                                            </Tooltip>
                                        </td>
                                    </tr>
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