/** @format */

import React from "react";
import Header from "../components/header/header.js";
import { Layout } from "antd";
import FifthPage from "../components/FifthPage";
const { Content } = Layout;


const HomePage = () => (
    <Layout style={{ minWidth: '1280px' }}>
        <Header />
        <Layout>
            {/*  <SideBar/> */}
            <Layout className='site-layout'>
                <Content style={{ margin: '2px 10px' }}>
                    <div className="site-layout-background" style={{ padding: 24, paddingTop: 0, minHeight: 360 }}>
                        <FifthPage/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    </Layout>
);




export default HomePage;
