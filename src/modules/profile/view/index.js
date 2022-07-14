import { useEffect, useState, useContext } from "react";
import { getTokenData } from "utils";
import Service from "../service";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import useStyles from "./style";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import PersonIcon from "@material-ui/icons/Person";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { AppContext } from "shared/contexts";
import Avatar from "@material-ui/core/Avatar";
import config from 'config';
import "../../../shared/Shared.css";

const defaultState = {
  email: "",
  name: "",
  mobile: "",
  state: "",
  deleteOwner: 0,
  partnerName: "",
  isLoading: false,
  selectedFile: null,
  profileImage: "",
  errors: {
    name: " ",
    mobile: " ",
  },
};

const ViewProfile = ({ history }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { showLoader, setAvatar } = useContext(AppContext);
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    fetchSetiingsData();
  }, []);

  const fetchSetiingsData = async () => {
    setState((prevState) => ({ ...prevState, isLoading: true }));
    showLoader(true);

    const { data, error } = await Service.post({
      userId: getTokenData().userId,
    });

    if (error) {
      toast.error(error);
      setState((prevState) => ({ ...prevState, isLoading: false }));
      showLoader(false);
    } else {
      setAvatar(`${config.frontendUrl}/${data?.profileImage}`);
      setState((prevState) => ({
        ...prevState,
        email: data?.email || defaultState.email,
        name: data?.name || defaultState.name,
        mobile: data?.mobile || defaultState.mobile,
        state: data?.statusMessage || defaultState.state,
        deleteOwner: data?.deleteOwner || defaultState.deleteOwner,
        partnerName: data?.partnerName || defaultState.partnerName,
        profileImage: `${config.frontendUrl}/${(data?.profileImage || defaultState.profileImage)}`,
        isLoading: false,
      }));
      showLoader(false);
    }
  };

console.log(state.profileImage, 'profileImage')
  const handleFileSelection = async (event) => {
    let selectedFile = null;
    if (event.currentTarget.files && event.currentTarget.files.length > 0) {
      selectedFile = event.currentTarget.files[0];
      event.target.value = "";
    }
    let profileImage = URL.createObjectURL(selectedFile);
    setState((prevState) => ({
      ...prevState,
      selectedFile,
      profileImage,
    }));
  };

  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpload = async (file) => {
    const userId= getTokenData().userId;
    const formData = new FormData();
    formData.append('type', 'user');
    formData.append('userId', userId);
    formData.append("file", file);

    const { data } = await Service.uploadAvtar(formData);
    return data;
  };

  const handleSubmit = async () => {
    let imageUrl = "";
    setState((prevState) => ({ ...prevState, isLoading: true }));
    showLoader(true);

    if (state.selectedFile) {
      const response = await handleUpload(state.selectedFile);
      if (response.error) {
        showLoader(false);
        return toast.error(t('popupSomethingWrong'));
      }
      imageUrl = `${response?.filePath}`;
    }

    const payload = {
      email: state.email,
      userName: state.name,
      userId: getTokenData().userId,
      grantToDelete: state.grantToDelete,
      partnerName: state.partnerName,
      mobile: state.mobile,
      profileImage: imageUrl,
    };

    const { error } = await Service.saveSettings(payload);

    if (error) {
      toast.error(error);
      setState((prevState) => ({ ...prevState, isLoading: false }));
      showLoader(false);
    } else {
      fetchSetiingsData();
      showLoader(false);
      localStorage.setItem("probe-name", state.name);
      localStorage.setItem("probe-mobile", state.mobile);
    }
  };
  console.log(state.profileImage, 'state.profileImage');
  return (
    <>
      <div className="d-flex f-align-center f-justify-between mb-8">
        <Typography variant="h4">{t("Update Profile")}</Typography>
      </div>
      <Paper elevation={4} className="p-4">
        <div className="wraplayout">
          <div className="d-flex flex-column p-4 f-align-center">
            <div className="d-flex f-justify-center">
              <Avatar
                id="profile-image"
                className={classes.avtarImage}
                src={state.profileImage}
              />
            </div>
            <Button
              component="label"
              htmlFor="file-input-field"
              variant="text"
              className="bold-font mt-1 Logout-Color"
            >
              Edit
            </Button>
            <input
              id="file-input-field"
              type="file"
              onChange={handleFileSelection}
              accept="image/x-png,image/gif,image/jpeg"
              className="d-none"
            />
          </div>
          <TextField
            disabled
            fullWidth
            label={t("usersEmail Address")}
            name="email"
            variant="outlined"
            value={state.email}
            helperText=" "
            onChange={handleChange}
            InputProps={{ endAdornment: <EmailIcon /> }}
          />
          <TextField
            fullWidth
            label={t("summaryname")}
            name="name"
            variant="outlined"
            value={state.name}
            error={state.errors.name.trim()}
            helperText={state.errors.name}
            onChange={handleChange}
            InputProps={{ endAdornment: <PersonIcon className="Icon-Color"/> }}
          />
          <TextField
            fullWidth
            label={t("usersMobile Number")}
            name="mobile"
            variant="outlined"
            value={state.mobile}
            error={state.errors.mobile.trim()}
            helperText={state.errors.mobile}
            onChange={handleChange}
            InputProps={{ endAdornment: <PhoneIphoneIcon className="Icon-Color"/> }}
          />
          <TextField
            disabled
            fullWidth
            label={t("summarystate")}
            name="state"
            variant="outlined"
            value={state.state}
            helperText=" "
            onChange={handleChange}
            InputProps={{ endAdornment: <DonutLargeIcon /> }}
          />
          <div className="d-flex f-align-center pt-5">
            <Button
              fullWidth
              // className='mr-10'
              size="large"
              className="Btn-Color"
              variant="contained"
              onClick={handleSubmit}
            >
              {t("settingSave")}
            </Button>
            {/* <Button
              variant='outlined'
              fullWidth
              className='ml-10'
              size='large'
              onClick={() => history.push('/summary')}
            >
              {t('settingsCancel')}
            </Button> */}
          </div>
        </div>
      </Paper>
    </>
  );
};

export default ViewProfile;
