import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import { Brand, CTA, Navbar } from "./components";
import { RiArrowUpFill } from "react-icons/ri";
import {
    Blog,
    Features,
    Footer,
    Header,
    Possibility,
    WhatGPT3,
} from "./containers";

function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
            <ScrollToTop
                smooth
                style={{ borderRadius: "50%", background: "#fff" }}
                width="20"
                height="20"
                component={<RiArrowUpFill size={20} />}
            />
        </div>
    );
}

export default App;
