/** @format */

import React from "react";
import Header from "../components/header/header.js";
import { Layout } from "antd";
import FirstPage from "../components/FirstPage";
import BlankPage from "../components/BlankPage";
import FrontPage from "../components/FrontPage.js";
const { Content } = Layout;



const LoginPage = () => (
    <Layout style={{ minWidth: '1280px' }}>
        <Header />
        <Layout>
            {/*  <SideBar/> */}
            <Layout className='site-layout'>
                <Content style={{ margin: '2px 10px' }}>
                    <div className="site-layout-background" style={{ padding: 24, paddingTop: 0, minHeight: 360 }}>
                        <FrontPage/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    </Layout>
);




export default LoginPage;
