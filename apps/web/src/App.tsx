import { Outlet } from '@tanstack/react-router';
import { Header } from '@tw-did/react-library';
import { Helmet } from 'react-helmet-async';
// import { Header } from './libs';

export function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" http-equiv="Content-Security-Policy" content="
          default-src 'self'; 
          img-src 'self';
          child-src 'none'; 
          script-src 'self'; 
          connect-src 'self' https://localhost:3000; 
          style-src 'self' https://fonts.googleapis.com; 
          font-src 'self' https://fonts.gstatic.com; 
          object-src 'self'; 
          base-uri 'self'; 
          form-action 'self'; 
          frame-ancestors 'self';  
          frame-src 'self';
          block-all-mixed-content;
          upgrade-insecure-requests;
        "/>
      </Helmet>
      <Header path={window.location.pathname} />
      <Outlet />
    </div>
  );
}

export default App;
