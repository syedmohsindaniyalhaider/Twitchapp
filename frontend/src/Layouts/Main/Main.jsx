import React, { useState } from "react";
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import LayoutHeader from "../Header/Header";
import LayoutLeftSidebar from "../LeftSidebar/LeftSidebar";
import LayoutFooter from "../Footer/Footer";

import styles from './style.module.css'

const Main = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <Layout style={{
                minHeight: '100vh',
            }}>
                <Header className={styles.bgColor}>
                    <LayoutHeader />
                </Header>
                <Layout>
                    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                        <LayoutLeftSidebar />
                    </Sider>
                    <Content>
                        <Router>
                            <Routes>
                                <Route path="/" element={<Main />}>
                                    <Route exact path="/dashboard" element={<Dashboard />} />
                                    <Route exact path="/home" element={<Home />} />
                                    {/* <Route path="contact" element={<Contact />} /> */}
                                    {/* <Route path="*" element={<NoPage />} /> */}
                                </Route>
                            </Routes>
                        </Router>
                        <Footer>
                            <LayoutFooter />
                        </Footer>
                    </Content>
                </Layout>

            </Layout>
        </>
    )
}

export default Main