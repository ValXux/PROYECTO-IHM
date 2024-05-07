import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

const Basic = () => {
    return (
        <>
            <StrictMode>
                <Header></Header>
                <Sidebar></Sidebar>
                <div className="container">
                    <div className="row">
                        <Outlet></Outlet>
                    </div>
                </div>
            </StrictMode>
        </>
    );
}

export default Basic;