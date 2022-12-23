import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scence/global/Topbar";
import Sidebar from "./scence/global/Sidebar";
import Dashboard from "./scence/dashboard";
import { MyProSidebarProvider } from "./scence/global/sidebarContext";

// https://codesandbox.io/s/react-dashboard-pnm6fh?file=/src/theme.js:0-5199

// import Sidebar from "./scence/global/Sidebar";
// import Team from "./scence/team";
// import Invoices from "./scence/invoices";
// import Contacts from "./scence/contacts";
// import Bar from "./scence/bar";
// import Form from "./scence/form";
// import Line from "./scence/line";
// import Pie from "./scence/pie";
// import FAQ from "./scence/faq";
// import Geography from "./scence/geography";
// import Calender from "./scence/calender";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div className="app">
            {/* <Sidebar /> */}
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/team" element={<Team />} /> */}
                {/* <Route path="/invoices" element={<Invoices />} /> */}
                {/* <Route path="/contacts" element={<Contacts />} /> */}
                {/* <Route path="/bar" element={<Bar />} /> */}
                {/* <Route path="/form" element={<Form />} /> */}
                {/* <Route path="/line" element={<Line />} /> */}
                {/* <Route path="/pie" element={<Pie />} /> */}
                {/* <Route path="/faq" element={<FAQ />} /> */}
                {/* <Route path="/geography" element={<Geography />} /> */}
                {/* <Route path="/calender" element={<Calender />} /> */}
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
