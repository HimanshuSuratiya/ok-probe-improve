import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import CloseIcon from "@material-ui/icons/Close";
import { Divider } from '@material-ui/core';
import { Button } from "@material-ui/core";
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { DialogActions, DialogContent, IconButton } from '@material-ui/core';
import { useTranslation } from "react-i18next";
import "../view/AgentStyle.css";
import { Add, Remove } from "@material-ui/icons";
import { Checkbox } from "@material-ui/core";
import "../../../../shared/Shared.css";
import FolderIcon from '@mui/icons-material/Folder';

const DepartmentSearch = ({ setClosePopUp }) => {
  const { t } = useTranslation();
  const [icon, setIcons] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [id, setId] = useState();
  const [selectDepartment, setSelectDepartment] = useState([]);

  const Data = [
    {
      id: 1,
      Dept: 'Dept-1',
    },
    {
      id: 2,
      Dept: 'Dept-2',
    },
    {
      id: 3,
      Dept: 'Dept-3',
    },
    {
      id: 4,
      Dept: 'Dept-4',
    },
    {
      id: 5,
      Dept: 'Dept-5',
    },
    {
      id: 6,
      Dept: 'Dept-6',
    },
    {
      id: 7,
      Dept: 'Dept-7',
    },
    {
      id: 8,
      Dept: 'Dept-8',
    },
    {
      id: 9,
      Dept: 'Dept-9',
    },
    {
      id: 10,
      Dept: 'Dept-10',
    },
    {
      id: 11,
      Dept: 'Dept-11',
    },
    {
      id: 12,
      Dept: 'Dept-12',
    },
  ]

  const checkBoxEvent = (id, e, Dept) => {
    if (e.target.checked) {
      setSelectDepartment(prevState => [...prevState, { id: id, Dept: Dept }]);
    } else {
      setSelectDepartment(prevState =>
        prevState.filter(items => {
          if (items.id != id) {
            return items
          }
        }),
      );
    }
  }

  return (
    <>
      <Paper>
        <div style={{ position: 'fixed', zIndex: '1300', inset: '0px' }}>
          <div className="MuiBackdrop-root">
            <div className="MuiDialog-container MuiDialog-scrollPaper" style={{ width: '100%', height: '100%' }}>
              <div style={{ height: '560px' }} className="MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded setWidth">
                <DialogTitle>
                  <div className="d-flex f-align-center f-justify-between">
                    <Typography variant="h5">
                      {t("Department Search")}
                    </Typography>
                    <IconButton>
                      <CloseIcon onClick={() => { setClosePopUp(false) }} />
                    </IconButton>
                  </div>
                </DialogTitle>
                <Divider />
                <DialogContent className="mt-4">
                  <Paper elevation={4} className="p-4">
                    <div className="MainTreeDiv">
                      <div className="MainInnerDivpopup">{icon ? <Add onClick={() => { setIsOpen(!isOpen); setIcons(!icon); }} /> : <Remove onClick={() => { setIsOpen(!isOpen); setIcons(!icon); }} />}
                        <div className="DepartmentList" onClick={() => { setIsOpen(!isOpen); setIcons(!icon); }}>Department List</div>
                      </div>
                      {!isOpen ? <div className="OpenDepartmentList">
                        {Data.map((item) => {
                          return (
                            <div className={`DepartDiv ${item.id === id ? 'class' : ''}`} onClick={() => { setId(item.id) }} >
                              <Checkbox color="primary" onChange={(e) => { checkBoxEvent(item.id, e, item.Dept) }} />
                              <FolderIcon style={{ color: 'gray' }} /> <div className="TextDepart">{item.Dept}</div>
                            </div>
                          )
                        })}
                      </div> : ''}
                    </div>
                  </Paper>
                  <Paper elevation={4} className="p-4 paperSecond">
                    <div className='SelectTextDiv'>
                      {selectDepartment.length != 0 ? <p> You Selected Departments</p> : <p>please select a department</p>}
                    </div>
                    <div className="SelectedDepartments">
                      {selectDepartment.map((item) => {
                        return <p>-{item.Dept}-</p>
                      })}
                    </div>
                  </Paper>
                </DialogContent>
                <DialogActions>
                  <div className="p-4">
                    <Button variant="contained" className="mr-4" style={{ width: '80px' }} onClick={() => { setClosePopUp(false) }}>
                      {t('settingsCancel')}
                    </Button>
                    <Button
                      variant="contained"
                      className="Btn-Color DepartmentButtonSimilarWidth"
                      disabled={false}
                      onClick={() => { setClosePopUp(false) }}
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

export default DepartmentSearch;