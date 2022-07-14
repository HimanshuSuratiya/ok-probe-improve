import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import CloseIcon from "@material-ui/icons/Close";
import { Divider } from '@material-ui/core';
import { Button } from "@material-ui/core";
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { DialogActions, DialogContent, IconButton } from '@material-ui/core';
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import "../../Agent/view/AgentStyle.css";
import { AiOutlineFile, AiOutlineFolder } from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";
import { Add, Remove } from "@material-ui/icons";
import "../../../../shared/Shared.css";

const SelectDepart = ({ setCloseSelectDepartPopUp }) => {
    const { t } = useTranslation();
    const [icon, setIcons] = useState(true);
    const [isOpen, setIsOpen] = useState(true);

    const FILE_ICONS = {
        js: <DiJavascript1 />,
        css: <DiCss3Full />,
        html: <DiHtml5 />,
        jsx: <DiReact />
    };

    const StyledTree = styled.div`
    line-height: 1.5;
  `;
    const StyledFile = styled.div`
    padding-left: 20px;
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  `;
    const StyledFolder = styled.div`
    padding-left: 20px;
  
    .folder--label {
      display: flex;
      align-items: center;
      span {
        margin-left: 5px;
      }
    }
  `;
    const Collapsible = styled.div`
    height: ${p => (p.isOpen ? "0" : "auto")};
    overflow: hidden;
  `;

    const File = ({ name }) => {
        let ext = name.split(".")[1];
        return (
            <StyledFile>
                {/* render the extension or fallback to generic file icon  */}
                {FILE_ICONS[ext] || <AiOutlineFile />}
                <span>{name}</span>
            </StyledFile>
        );
    };

    const Folder = ({ name, children }) => {
        const handleToggle = (e, name) => {
            e.preventDefault();
            if (name === 'Department') {
                setIsOpen(!isOpen);
                setIcons(!icon);
            }
        };

        return (
            <StyledFolder>
                <div className="folder--label" onClick={(e) => { handleToggle(e, name) }}>
                    <AiOutlineFolder />
                    <span>{name}</span>
                </div>
                <Collapsible isOpen={isOpen}>{children}</Collapsible>
            </StyledFolder>
        );
    };

    const Tree = ({ children }) => {
        return <StyledTree>{children}</StyledTree>;
    };

    Tree.File = File;
    Tree.Folder = Folder;
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
                                            {t("Select Department")}
                                        </Typography>
                                        <IconButton>
                                            <CloseIcon onClick={() => { setCloseSelectDepartPopUp(false) }} />
                                        </IconButton>
                                    </div>
                                </DialogTitle>
                                <Divider />
                                <DialogContent className="mt-4">
                                    <Paper elevation={4} className="p-4">
                                        <div className="MainTreeDiv">
                                            <div style={{ display: 'flex', alignItems: 'center', maxHeight: '25px' }} >{icon ? <Add onClick={() => { setIsOpen(!isOpen); setIcons(!icon); }} /> : <Remove onClick={() => { setIsOpen(!isOpen); setIcons(!icon); }} />}</div>
                                            <Tree >
                                                <Tree.Folder name="Department">
                                                    <Tree.Folder name="Dep-1" />
                                                    <Tree.Folder name='Dep-2' />
                                                    <Tree.Folder name='Dep-3' />
                                                    <Tree.Folder name='Dep-4' />
                                                </Tree.Folder>
                                            </Tree>
                                        </div>
                                    </Paper>
                                </DialogContent>
                                <DialogActions>
                                    <div className="p-4">
                                        <Button style={{ backgroundColor: '#e0e0e0' }} disabled={false} className="mr-4" onClick={() => { setCloseSelectDepartPopUp(false) }}>
                                            {t('settingsCancel')}
                                        </Button>
                                        <Button
                                            variant="contained"
                                            className="Btn-Color"
                                            disabled={false}
                                            onClick={() => { setCloseSelectDepartPopUp(false) }}
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

export default SelectDepart;