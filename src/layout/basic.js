import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

const Basic = () => {
    return (
        <>
            <StrictMode>
                <Header />
                <div className="container">
                    <Outlet></Outlet>
                </div>
            </StrictMode>
        </>
    );
}

export default Basic;