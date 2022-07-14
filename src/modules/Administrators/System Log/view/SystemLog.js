import React from "react";
import AgentActivity from "../Components/AgentActivity";
import SystemLogManagement from "../Components/SystemLogManagement";
import { Route, Redirect, Switch } from "react-router-dom";

const noop = () => { };
const SystemLog = ({ match, getUnassignDeviceCount = noop }) => {
    return (
        <>
            <Switch>
                <Route exact path={match.path} render={props => <AgentActivity getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Route exact path={`${match.path}/system-log-management`} render={props => <SystemLogManagement getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default SystemLog;