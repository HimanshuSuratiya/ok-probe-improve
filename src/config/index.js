const isProd = process.env.REACT_APP_STAGE === 'prod';

const API_BASE_URL = isProd
  ? 'https://app.okprobe.com:7443/api'
  : 'https://app.okprobe.com:8443/api';
const SOCKET_URL = isProd
  ? 'wss://app.okprobe.com:7443/okprobe/handler/chat.ashx'
  : 'wss://app.okprobe.com:8443/okprobe/handler/chat.ashx';

const FRONTEND_URL = isProd
  ? 'https://app2.okprobe.com:443'
  : 'https://app2.okprobe.com';

const FRONTEND_BASE_URL = isProd
  ? 'https://app2.okprobe.com:443/api'
  : 'https://app2.okprobe.com/api';

// const FRONTEND_URL = isProd
//   ? 'http://localhost:5000'
//   : 'http://localhost:5000';

// const FRONTEND_BASE_URL = isProd
//   ? 'http://localhost:500/api'
//   : 'http://localhost:5000/api';

const GOOGLE_CLIENT_ID = isProd
  ? '514314732405-jhdrcmm0g6jt0vngton7mq1dm3vhg1ei.apps.googleusercontent.com'
  : '514314732405-jhdrcmm0g6jt0vngton7mq1dm3vhg1ei.apps.googleusercontent.com';

const NAVER_CLIENT_ID = isProd
  ? '4rDIhmq8vLPg_eEerDMF'
  : 'fQ3osqjeJJ6YJjYC2vGX';

const NAVER_CALLBACK_URL = isProd
  ? 'https://app2.okprobe.com/naver-login'
  : 'http://epsoft2020.cafe24.com:5000/naver-login';

// It is same for mobile app as well
const KAKAO_CLIENT_ID = isProd
  ? '0cbc59ebea8694425b48d638f78339f3'
  : '0cbc59ebea8694425b48d638f78339f3';

const MODE = isProd
  ? 'ENT'
  : 'ClOUD';

const config = {
  apiBaseUrl: API_BASE_URL,
  socketUrl: SOCKET_URL,
  googleClientId: GOOGLE_CLIENT_ID,
  kakaoCleintId: KAKAO_CLIENT_ID,
  naverClientId: NAVER_CLIENT_ID,
  naverCallbackUrl: NAVER_CALLBACK_URL,
  frontendBaseUrl: FRONTEND_BASE_URL,
  frontendUrl: FRONTEND_URL,
  mode: MODE,
};

export default config;