import { BrowserRouter as Router, Route, Redirect, Switch, Link, useHistory, } from "react-router-dom";
import clsx from "clsx";
import useStyles from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StylesGlobal } from "shared";
import { AdminLayout } from "shared/components";
import LoginModule from "./login";
import UsersModule from "./users";
import NoticeModule from "./notice";
import CustomersModule from "./customers";
import DataProcessModule from "./data-process";
import SearchHistory from './Administrators/Search History/SearchHistory';
import PrinterSearch from "./Administrators/Printer Search/view/PrinterSearch";
import Model from "./Administrators/Model/view/Model";
import License from "./Administrators/License Management/view/License";
import GroupManagement from "./Administrators/Group Management/view/GroupManagement";
import PrintersModule from "./printers";
import NewPrintersModule from "./new-printers";
import SummaryModule from "./summary";
import SystemLog from "./Administrators/System Log/view/SystemLog";
import OKTalkModule from "./oktalk";
import WaitingPrintersModule from "./waiting-printers";
import SettingsModule from "./settings";
import HomeIcon from "@material-ui/icons/Home";
import PrintIcon from "@material-ui/icons/Print";
import DomainIcon from "@material-ui/icons/Domain";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ScheduleIcon from "@material-ui/icons/Schedule";
import GroupIcon from "@material-ui/icons/Group";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import SearchIcon from '@material-ui/icons/Search';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Backdrop, Button, CircularProgress, Typography, } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { getTokenData, removeTokenData } from "utils";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { AppContext, AppContextConsumer } from "shared/contexts";
import { useTranslation } from "react-i18next";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import ChatIcon from "@material-ui/icons/Chat";
import { SharedService } from "services";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import ProfileModule from "./profile";
import config from "config";
import { getJSONStringForBigNumber } from "utils";
import Badge from "@material-ui/core/Badge";
import { useIdleTimer } from "react-idle-timer";
import ProbeNotice from "./probe-notice";
import NaverLogin from "./naver-login";
import DnsIcon from '@material-ui/icons/Dns';
import ServerConfiguration from "./Administrators/Server Configuration/view/ServerConfiguration";
import Agent from "./Administrators/Agent/view/Agent";
import "../shared/Shared.css";
import 'react-nestable/dist/styles/index.css';


const Socket = new W3CWebSocket(config.socketUrl);

const Logout = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const { showLoader } = useContext(AppContext);
  const [remainingTime, setRemainingTime] = useState(600000);
  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 60 * 10,
    debounce: 500,
    onIdle: () => {
      //showLoader(true);
      removeTokenData();
      window.location = "/login";
      // history.push('/login');
      //setTimeout(() => showLoader(false), 1000);
    },
  });

  function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  useEffect(() => {
    setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);
  }, []);

  return (
    <Button
      className="text-bold ml-2 Logout-Color"
      startIcon={<ExitToAppIcon />}
      onClick={() => {
        if (window.gapi) {
          try {
            const auth2 = window.gapi.auth2.getAuthInstance();
            auth2.signOut().then(() => auth2.disconnect());
          } catch (err) {
            console.log(err, "Google logout error");
          }
        }
        if (window.Kakao?.Auth && window.Kakao.Auth.getAccessToken()) {
          window.Kakao.Auth.logout();
        }
        removeTokenData();
        window.location = "/login";
      }}
    >
      {t("naviationLogout")}
      <div className={clsx("", useStyles().logout_time)}>
        <p>( {millisToMinutesAndSeconds(remainingTime) == '09:60' ? '10:00' : millisToMinutesAndSeconds(remainingTime)} )</p>
      </div>
    </Button>
  );
};

const AppModule = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const {
    showLoader,
    devices,
    notifications,
    deleteNotifications,
    newPrinterCount,
    waitingPrinterCount,
    setDevices,
    setIsFetchingDevices,
    setNotifications,
    setDeleteNotification,
    setNewPrinterCount,
    setWaitingPrinterCount,
  } = useContext(AppContext);
  const userData = getTokenData();
  StylesGlobal();

  const fetchDevices = async () => {
    setIsFetchingDevices(true);

    const { data, error } = await SharedService.getDeviceList({
      page: 1,
      onePageDataCount: 1000,
      sortField: "display_name",
      sortOrder: "A",
    });

    if (error) {
      // toast.error(error); TDOD
    } else {
      setDevices(data.Device || []);
      const test = [];
      const notificationMessages = (data.Device || []).filter(
        (item) => !!+item.chatCount
      );
      notificationMessages.map((item) => {
        for (let i = 0; i < item.chatCount; i++) {
          test.push({
            chatDate: item.chatDate,
            deviceInfoId: item.deviceInfoId,
          });
        }
      });
      !!notificationMessages.length && setNotifications(test);
    }
    setIsFetchingDevices(false);
  };

  const GetUnassignDeviceCount = async () => {
    const { data, error } = await SharedService.GetUnassignDeviceCount();

    if (error) {
      // toast.error(error); TODO
    } else {
      setNewPrinterCount(data || "0");
    }
  };

  const GetWaitDeviceCount = async () => {
    const { data, error } = await SharedService.GetWaitDeviceCount();

    if (error) {
      // toast.error(error); TODO
    } else {
      setWaitingPrinterCount(data || "0");
    }
  };

  const broadcastMessage = useCallback((data) => {
    Socket.send(JSON.stringify({ ...data }));
  }, []);

  useEffect(() => {
    Socket.onmessage = (response) => {
      const message = getJSONStringForBigNumber(response?.data);
      console.log(JSON.stringify(message), "dasd");
      const isDeviceAssigned = devices.some(
        (device) => device.deviceInfoId === message.deviceInfoId
      );
      if (message.messageType == 1) {
        if (isDeviceAssigned) {
          const chatDate = (message.chatDate || "").split(" ");
          message["self"] = message.userId === userData.userId;
          message["messageId"] = message.talkId;
          message["messageDt"] =
            chatDate?.length === 3
              ? `${chatDate[0]} ${chatDate[2]}`
              : message.chatDate;
          message["imageUrl"] = message.imageFileName;
          setNotifications([...notifications, message]);
        }
      } else if (message.messageType == 2) {
        setDeleteNotification([...deleteNotifications, message.messageId]);
      }
    };
  }, [deleteNotifications, notifications, devices]);

  useEffect(() => {
    if (userData.userSessionToken) {
      fetchDevices();
      GetUnassignDeviceCount();
      GetWaitDeviceCount();
    }
  }, [userData.userSessionToken]);

  const pendingNotifications = useMemo(() => {
    const othersMessages = notifications.filter(
      (notification) => !notification.self
    ).length;
    return othersMessages > 99 ? "+99" : othersMessages;
  }, [notifications]);

  const sidebarElements = [
    {
      to: "/summary",
      icon: <HomeIcon className="color-white" />,
      label: t("sidebarSummary"),
    },
    {
      to: "/oktalk",
      icon: <ChatIcon className="color-white" />,
      label: t("oktalkTitle"),
      count: pendingNotifications,
    },
    {
      to: "/printers",
      icon: <PrintIcon className="color-white" />,
      label: t("sidebarPrinters"),
    },
    {
      to: "/customers",
      icon: <DomainIcon className="color-white" />,
      label: t("sidebarCustomers"),
    },
    {
      to: "/new-printers",
      icon: <AddCircleIcon className="color-white" />,
      label: t("sidebarNewPrinters"),
      count: newPrinterCount,
    },
    {
      to: "/waiting-printers",
      icon: <ScheduleIcon className="color-white" />,
      label: t("sidebarWaitingPrinters"),
      count: waitingPrinterCount,
    },
    {
      to: "/settings",
      icon: <SettingsIcon className="color-white" />,
      label: t("sidebarSettings"),
    },
    {
      to: "/notice",
      icon: <NotificationsIcon className="color-white" />,
      label: t("sidebarNotices"),
    },
    {
      to: "/data-process-histories",
      icon: <CalendarViewDayIcon className="color-white" />,
      label: t("sidebarDataProcess"),
    },
    {
      to: "/administrators",
      icon: <SupervisorAccountIcon className="color-white" />,
      label: t("sidebarAdministrators"),
      administratorSubArray: [
        {
          to: "/printer-search",
          label: t("sidebarPrinterSearch"),
        },
        {
          to: "/search-history",
          label: t("sidebarSearchHistory"),
        },
        {
          to: "/model",
          label: t("sidebarModel"),
        },
        {
          to: "/group-management",
          label: t("sidebarGroupManagement"),
        },
        {
          to: "/license-management",
          label: t("License Management"),
        },
        {
          to: "/server-configuration",
          label: t("Server Configuration"),
        },
        {
          to: "/agent",
          label: t("Agent"),
        },
        {
          to: "/system-log",
          label: t("System Log"),
        },
      ]
    },
  ];

  if (userData?.userRole !== "10") {
    sidebarElements.splice(6, 0, {
      to: "/users",
      icon: <GroupIcon className="color-white" />,
      label: t("sidebargUsers"),
    });
  }

  return (
    <AppContextConsumer>
      {({ lang, setLang, isLoading }) => (
        <Router>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
          />
          <Backdrop open={isLoading} style={{ zIndex: 9999 }}>
            <CircularProgress color="primary" />
          </Backdrop>
          <Switch>
            <Route path="/login" component={LoginModule} />
            <Route path="/naver-login" component={NaverLogin} />

            <AdminLayout
              sidebarElements={sidebarElements}
              headerElements={
                <div
                  className={`${clsx(" top_hideno1", classes.top_hideno1)} d-flex f-align-center mr-10 top_hideno1`}
                >
                  <div
                    className={`${clsx("top_hideno1", classes.top_hideno1)} d-flex f-align-center mr-10 top_hideno1`}
                  >
                    <Badge
                      badgeContent={pendingNotifications}
                      color="primary"
                      className="mr-6"
                    >
                      {pendingNotifications ? (
                        <Link to="/oktalk">
                          <NotificationsIcon
                            color="error"
                            className="c-pointer"
                          />
                        </Link>
                      ) : (
                        <NotificationsIcon style={{ color: `${notifications.length ? 'f44336' : '#fff'}` }} />
                      )}
                    </Badge>

                    <FormControl>
                      <Select
                        value={lang}
                        onChange={(evt) => setLang(evt.target.value || "en")}
                      >
                        <MenuItem value="en">English (EN)</MenuItem>
                        <MenuItem value="ko">한국어 (KO)</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  {lang === "en" ? (
                    <Typography
                      variant="body1"
                      style={{ color: "#212529" }}
                      className={clsx(
                        "d-flex f-align-center",
                        classes.top_hideno1
                      )}
                    >
                      {`${t("naviationWelcome")} ${(getTokenData() || {}).name
                        }`}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body1"
                      style={{ color: "#212529" }}
                      className={clsx(
                        "d-flex f-align-center",
                        classes.top_hideno1
                      )}
                    >
                      {`${(getTokenData() || {}).name} ${t(
                        "naviationWelcome"
                      )} `}
                    </Typography>
                  )}

                  <Logout />
                </div>
              }
            >
              <ProbeNotice />
              <Route
                path="/new-printers"
                render={(props) => (
                  <NewPrintersModule
                    getUnassignDeviceCount={() => {
                      GetUnassignDeviceCount();
                      GetWaitDeviceCount();
                    }}
                    {...props}
                  />
                )}
              />
              <Route
                path="/printer-search"
                render={(props) => (
                  <PrinterSearch
                    getUnassignDeviceCount={() => {
                      GetUnassignDeviceCount();
                      GetWaitDeviceCount();
                    }}
                    {...props}
                  />
                )}
              />
              <Route
                path="/search-history"
                render={(props) => (
                  <SearchHistory
                    getUnassignDeviceCount={() => {
                      GetUnassignDeviceCount();
                      GetWaitDeviceCount();
                    }}
                    {...props}
                  />
                )}
              />
              <Route
                path="/model"
                render={(props) => (
                  <Model
                    getUnassignDeviceCount={() => {
                      GetUnassignDeviceCount();
                      GetWaitDeviceCount();
                    }}
                    {...props}
                  />
                )}
              />
              <Route
                path="/group-management"
                render={(props) => (
                  <GroupManagement
                    getUnassignDeviceCount={() => {
                      GetUnassignDeviceCount();
                      GetWaitDeviceCount();
                    }}
                    {...props}
                  />
                )}
              />
              <Route
                path="/server-configuration"
                render={(props) => (
                  <ServerConfiguration
                    getUnassignDeviceCount={() => {
                      GetUnassignDeviceCount();
                      GetWaitDeviceCount();
                    }}
                    {...props}
                  />
                )}
              />
              <Route
                path="/agent"
                render={(props) => (
                  <Agent
                    getUnassignDeviceCount={() => {
                      GetUnassignDeviceCount();
                      GetWaitDeviceCount();
                    }}
                    {...props}
                  />
                )}
              />
              <Route
                path="/system-log"
                render={(props) => (
                  <SystemLog
                    getUnassignDeviceCount={() => {
                      GetUnassignDeviceCount();
                      GetWaitDeviceCount();
                    }}
                    {...props}
                  />
                )}
              />
              <Route
                path="/waiting-printers"
                render={(props) => (
                  <WaitingPrintersModule
                    getWaitDeviceCount={() => {
                      GetUnassignDeviceCount();
                      GetWaitDeviceCount();
                    }}
                    {...props}
                  />
                )}
              />
              <Route
                path="/printers"
                render={(props) => (
                  <PrintersModule
                    broadcastMessage={broadcastMessage}
                    {...props}
                  />
                )}
              />
              <Route path="/users" component={UsersModule} />
              <Route path="/notice" component={NoticeModule} />
              <Route path="/customers" component={CustomersModule} />
              <Route
                path="/data-process-histories"
                component={DataProcessModule}
              />
              <Route path="/summary" component={SummaryModule} />
              <Route path="/settings" component={SettingsModule} />
              <Route path="/profile" component={ProfileModule} />
              <Route path="/administrators" component={PrinterSearch} />
              <Route path="/license-management" component={License} />
              <Route
                path="/oktalk"
                render={(props) => (
                  <OKTalkModule
                    broadcastMessage={broadcastMessage}
                    {...props}
                  />
                )}
              />
              <Route
                path="/uploads/*"
                component={() => (window.location = "/")}
              />
              <Redirect
                exact
                path="/"
                to={userData.userSessionToken ? "/summary" : "/login"}
              />
            </AdminLayout>
          </Switch>
        </Router>
      )}
    </AppContextConsumer>
  );
};

export default AppModule;
