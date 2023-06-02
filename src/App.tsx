import { ConfigProvider, App as AntApp } from 'antd';
import { HashRouter } from 'react-router-dom';
import 'dayjs/locale/zh-cn';
import locale from 'antd/locale/zh_CN';
// import theme from './config/theme';
import Router from './routers';
function App() {
  return (
    <HashRouter>
      <ConfigProvider locale={locale} /* componentSize={assemblySize} */ /* theme={theme} */>
        <AntApp>
          {/* <AuthRouter> */}
          <Router />
          {/* </AuthRouter> */}
        </AntApp>
      </ConfigProvider>
    </HashRouter>
  );
}

export default App;
