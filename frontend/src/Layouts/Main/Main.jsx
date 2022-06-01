import React, { useState } from "react";
import { Layout } from 'antd';
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
                <Header>
                    <LayoutHeader />
                </Header>
                <Layout>
                    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                        <LayoutLeftSidebar />
                    </Sider>
                    <Content>Content
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