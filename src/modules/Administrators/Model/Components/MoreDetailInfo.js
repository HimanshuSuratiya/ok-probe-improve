import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import "../view/Modelstyle.css";
import { Grid } from "shared/components";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem } from "@material-ui/core";
import "../../../../shared/Shared.css";
import PrinterImage from "../Image/printer1.png";

const MoreDetailInfo = () => {
  const { t } = useTranslation();
  const [ModelType, setModelType] = useState(0);
  const [SupplyType, setSupplyType] = useState(0);
  const [PaperSize, setPaperSize] = useState(0);
  const updateModelType = (event) => {
    setModelType(event.target.value);
  };

  const updateSupplyType = (event) => {
    setSupplyType(event.target.value);
  }

  const updatePaperSize = (event) => {
    setPaperSize(event.target.value);
  }

  const [toner, setToner] = useState(0)
  const [fuser, setFuser] = useState(0)
  const [developer, setDeveloper] = useState(0)
  const [opc, setOPC] = useState(0)
  const [transfer, setTransfer] = useState(0)
  const [other, setOther] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  const columnConfig = [
    {
      id: "_Toner",
      field: "_Toner",
      label: t("processToner"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "right" }}>
          {Rows.Toner}
        </Typography>
      ),
    },
    {
      id: "_Fuser",
      fieldName: "_Fuser",
      label: t("processFuser"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "right" }}>
          {Rows.Fuser}
        </Typography>
      ),
    },
    {
      id: "_Developer",
      field: "_Developer",
      label: t("processDeveloper"),
      canSort: true,
      render: (Rows) => (
        <Typography variant="body1" style={{ textAlign: "right" }}>
          {Rows.Developer}
        </Typography>
      ),
    },
    {
      id: "-OPC",
      field: "_OPC",
      label: t("processOPC"),
      canSort: true,
      render: (Rows) => (
        <>
          <Typography variant="body1" style={{ textAlign: "right" }}>
            {Rows.OPC}
          </Typography>
        </>
      ),
    },
    {
      id: "_Transfer",
      field: "_Transfer",
      label: t("processTransfer"),
      canSort: true,
      render: (Rows) => (
        <>
          <Typography variant="body1" style={{ textAlign: "right" }}>
            {Rows.Transfer}
          </Typography>
        </>
      ),
    },
    {
      id: "_Other",
      field: "_Other",
      label: t("processOther"),
      canSort: true,
      render: (Rows) => (
        <>
          <Typography variant="body1" style={{ textAlign: "right" }}>
            {Rows.Other}
          </Typography>
        </>
      ),
    },
  ];

  const Rows = [
    {
      id: 1,
      PrinterModal: 'ALL',
      Toner: <TextField
        className="Rowfield TextRight"
        name="noticeUsageLevel"
        variant="outlined"
        value={toner}
        size="small"
        type={'number'}
        onChange={(e) => {
          let Toner = parseInt(e.target.value, 10);
          if (Toner > 100) Toner = 100;
          if (Toner < 0) Toner = 0;
          setToner(Toner);
        }
        }
      />,
      Fuser: <TextField
        name="noticeUsageLevel"
        variant="outlined"
        className="Rowfield TextRight"
        value={fuser}
        size="small"
        type={'number'}
        onChange={(e) => {
          let Fuser = parseInt(e.target.value, 10);
          if (Fuser > 100) Fuser = 100;
          if (Fuser < 0) Fuser = 0;
          setFuser(Fuser);
        }
        }
      />,
      Developer: <TextField
        name="noticeUsageLevel"
        className="Rowfield TextRight"
        variant="outlined"
        value={developer}
        size="small"
        type={'number'}
        onChange={(e) => {
          let Developer = parseInt(e.target.value, 10);
          if (Developer > 100) Developer = 100;
          if (Developer < 0) Developer = 0;
          setDeveloper(Developer);
        }
        }
      />,
      OPC: <TextField
        name="noticeUsageLevel"
        variant="outlined"
        className="Rowfield TextRight"
        value={opc}
        size="small"
        type={'number'}
        onChange={(e) => {
          let OPC = parseInt(e.target.value, 10);
          if (OPC > 100) OPC = 100;
          if (OPC < 0) OPC = 0;
          setOPC(OPC);
        }
        }
      />,
      Transfer: <TextField
        name="noticeUsageLevel"
        className="Rowfield TextRight"
        variant="outlined"
        value={transfer}
        size="small"
        type={'number'}
        onChange={(e) => {
          let Transfer = parseInt(e.target.value, 10);
          if (Transfer > 100) Transfer = 100;
          if (Transfer < 0) Transfer = 0;
          setTransfer(Transfer);
        }
        }
      />,
      Other: <TextField
        name="noticeUsageLevel"
        className="Rowfield TextRight"
        variant="outlined"
        value={other}
        size="small"
        type={'number'}
        onChange={(e) => {
          let Other = parseInt(e.target.value, 10);
          if (Other > 100) Other = 100;
          if (Other < 0) Other = 0;
          setOther(Other);
        }
        }
      />,
    },
  ];

  const columnConfig2 = [
    {
      id: "_Min",
      field: "_Min",
      label: t("processMin"),
      canSort: true,
      render: (Rows2) => (
        <Typography variant="body1" style={{ textAlign: "right" }}>
          {Rows2.Min}
        </Typography>
      ),
    },
    {
      id: "_Max",
      field: "_Max",
      label: t("processMax"),
      canSort: true,
      render: (Rows2) => (
        <Typography variant="body1" style={{ textAlign: "right" }}>
          {Rows2.Max}
        </Typography>
      ),
    },
  ]

  const Rows2 = [
    {
      id: 1,
      Client: 'ALL',
      Min: <TextField
        name="noticeUsageLevel"
        variant="outlined"
        className="Rowfield TextRight"
        value={min}
        size="small"
        type={'number'}
        onChange={(e) => {
          let Min = parseInt(e.target.value, 10);
          if (Min > 100) Min = 100;
          if (Min < 0) Min = 0;
          setMin(Min);
        }
        }
      />,
      Max: <TextField
        name="noticeUsageLevel"
        className="Rowfield TextRight"
        variant="outlined"
        value={max}
        size="small"
        type={'number'}
        onChange={(e) => {
          let Max = parseInt(e.target.value, 10);
          if (Max > 100) Max = 100;
          if (Max < 0) Max = 0;
          setMax(Max);
        }
        }
      />,
    },
  ]

  return (
    <>
      <div className="d-flex f-align-center f-justify-between mb-8">
        <Typography variant="h4">{t("Detail Info")}</Typography>
      </div>
      <Paper evaluation={4}>
        <table class="table tableBordered other-page-table-main">
          <tbody>
            <tr>
              <td colspan="2">
                <p className="para">{t('processManufacturer')}</p>
              </td>
              <td>
                <TextField
                  className="textfieldStyle"
                  name="noticeUsageLevel"
                  variant="outlined"
                  value="Samsung Electronics"
                  size="small"
                  disabled={true}
                  style={{ backgroundColor: '#f5f6f8' }}
                />
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <p className="para">{t('processModelType')}</p>
              </td>
              <td>
                <Select
                  value={ModelType}
                  style={{ minWidth: '120px' }}
                  className="textfieldStyle"
                  onChange={updateModelType}
                  displayEmpty
                  variant="outlined"
                >
                  <MenuItem value={0}>{t("processSelect")}</MenuItem>
                  <MenuItem value={'COLOR'}>COLOR</MenuItem>
                  <MenuItem value={'MONO'}>MONO</MenuItem>
                </Select>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <p className="para">{t('Support Paper Size')}</p>
              </td>
              <td>
                <Select
                  value={PaperSize}
                  style={{ minWidth: '120px' }}
                  className="textfieldStyle"
                  onChange={updatePaperSize}
                  displayEmpty
                  variant="outlined"
                >
                  <MenuItem value={0}>{t("processSelect")}</MenuItem>
                  <MenuItem value={'A3'}>A3</MenuItem>
                  <MenuItem value={'A4'}>A4</MenuItem>
                </Select>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <p className="para">{t('processSupplyType')}</p>
              </td>
              <td>
                <Select
                  value={SupplyType}
                  style={{ minWidth: '120px' }}
                  className="textfieldStyle"
                  onChange={updateSupplyType}
                  displayEmpty
                  variant="outlined"
                >
                  <MenuItem value={0}>{t("processSelect")}</MenuItem>
                  <MenuItem value={'TONOR'}>TONOR</MenuItem>
                  <MenuItem value={'INK'}>INK</MenuItem>
                </Select>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <p className="para">{t('processDriver')}</p>
              </td>
              <td>
                <TextField
                  className="textfieldStyleAnother"
                  name="noticeUsageLevel"
                  variant="outlined"
                  defaultValue={""}
                  size="small"
                />
                <Button variant="contained" className="browserBtn Btn-Color"> Browser </Button>
                <br />
                <a className="textClass" >-Filename can be alphanumeric characters,'-' and '-'</a>
                <br />
                <p className="textClass" > <input type="checkbox" /> Use Default Printer Driver</p>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <p className="para">{t('processDescription')}</p>
              </td>
              <td>
                <TextField
                  style={{ width: '100%', padding: '0px' }}
                  name="noticeUsageLevel"
                  variant="outlined"
                  defaultValue={""}
                  size="small"
                />
              </td>
            </tr>
            <tr>
              <td rowspan="2" style={{padding:'0px', border:'none'}}>
                <p className="para">{t('')}</p>
              </td>
              <td>
                <p className="para">{t('processFull-Size')}</p>
              </td>
              <td>
                <TextField
                  className="textfieldStyleAnother"
                  name="noticeUsageLevel"
                  variant="outlined"
                  defaultValue={""}
                  size="small"
                />
                <Button variant="contained" className="browserBtn Btn-Color"> Browser </Button>
                <br />
                <p className="textClass"> <input type="checkbox" /> Date Existing Image </p>
                <a className="textClass">-Filename can be alphanumeric characters,'-' and '-', image size
                  shuld be less then </a>
              </td>
            </tr>
            <tr>
              <td>
                <p className="para">{t('processReduced-Size')}</p>
              </td>
              <td style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                <div style={{ width: '78%' }}>
                  <TextField
                    className="textfieldStyleAnother"
                    style={{ width: '64%' }}
                    name="noticeUsageLevel"
                    variant="outlined"
                    defaultValue={""}
                    size="small"
                  />
                  <Button variant="contained" className="browserBtn Btn-Color"> Browser </Button>
                  <br />
                  <p className="textClass"> <input type="checkbox" /> Date Existing Image </p>
                  <a className="textClass">-Filename can be alphanumeric characters,'-' and '-', 65x65
                    pixle image size is appropriate. </a>
                </div>
                <div style={{ height: 'auto', width: '12%' }}>
                  <img style={{ width: '100%' }} src={PrinterImage} alt="No Image"/>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Paper>
      <h1 className="Heading mt-5">{t('processModelConsumableThreshold')}</h1>
      <Paper className='removeBottom' elevation={4} style={{ marginTop: '20px' }}>
        <Grid hasSelection={false} columns={columnConfig} rows={Rows} />
      </Paper>
      <h1 className="Heading mt-5">{t('processModelUsageThreshold')}</h1>
      <Paper elevation={4} style={{ marginTop: '20px' }}>
        <Grid hasSelection={false} columns={columnConfig2} rows={Rows2} />
      </Paper>
    </>
  );
};

export default MoreDetailInfo;
