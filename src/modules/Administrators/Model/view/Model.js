import React from "react";
import ModelTable from '../Components/ModelTable';
import { Button } from "@material-ui/core"
import ModelInfo from '../Components/ModelInfo';
import MoreDetailInfo from "../Components/MoreDetailInfo";
import { Route, Redirect, Switch, Link } from "react-router-dom";

const noop = () => { };
const Model = ({ match, getUnassignDeviceCount = noop }) => {
    return (
        <>
            <Switch>
                <Route exact path={match.path} render={props => <ModelTable getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Route exact path={`${match.path}/model-info`} render={props => <ModelInfo getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Route exact path={`${match.path}/model-detailed-info`} render={props => <MoreDetailInfo getUnassignDeviceCount={getUnassignDeviceCount} {...props} />} />
                <Redirect to="/" />
            </Switch>
            <div style={{ marginTop: '10px' }}>
                <Link to={`${match.path}/model-info`}>
                    <Button style={{ marginLeft: '10px' }} variant="outlined" color="primary" >page 2</Button>
                </Link>
            </div>
        </>
    );
};

export default Model;
