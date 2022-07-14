import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import PrinterImage from "../Image/printer1.png";
import "../view/Modelstyle.css";

const ModelInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="d-flex f-align-center f-justify-between mb-8">
        <Typography variant="h4">{t("Short Info")}</Typography>
      </div>
      <Paper elevation={4}>
        <table class="table tableBordered ">
          <tbody>
            <tr>
              <td colspan="2">
                <p className="para">{t('processModelType')}</p>
              </td>
              <td>COLOR MONO</td>
            </tr>
            <tr>
              <td colspan="2">
                <p className="para">{t('processSupplyType')}</p>
              </td>
              <td>LASER OR INK</td>
            </tr>
            <tr>
              <td colspan="2">
                <p className="para">{t('processDriver')}</p>
              </td>
              <td>NEED TO BE UPLOADED FILE</td>
            </tr>
            <tr>
              <td colspan="2">
                <p className="para">{t('processDescription')}</p>
              </td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">
                <p className="para">{t('processImage')}</p>
              </td>
              <td>
                <p className="para" >{t('processFull-Size')}</p>
              </td>
              <td>
                <div class="printer1Img">
                  <img src={PrinterImage} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <p className="para">{t('processReduced-Size')}</p>
              </td>
              <td>
                <div class="reducedsize">
                  <img src={PrinterImage} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Paper>
    </>
  );
};

export default ModelInfo;
