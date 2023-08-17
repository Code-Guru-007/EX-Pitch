import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home";
import Features from "./components/features";
import Contact from "./components/contact";
import Extension from "./components/extension";
import { theme } from "./theme/theme";
import Header from "./components/header";
import Footer from "./components/footer";
import SucessoEmail from "./components/sucessoEmail";
import Login from "./components/login";
import GetStart from "./pages/getstart";
import Email from "./pages/email";
// import Uploading from "./pages/uploading";
// import Processing from "./pages/processing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nemesis" element={<GetStart />} />
        <Route path="/email" element={<Email />} />
        {/* <Route path="/uploading" element={<Uploading />} />
        <Route path="/processing" element={<Processing />} /> */}
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/sucessoEmail" element={<SucessoEmail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer/> */}
    </ThemeProvider>
  );
}

export default App;
