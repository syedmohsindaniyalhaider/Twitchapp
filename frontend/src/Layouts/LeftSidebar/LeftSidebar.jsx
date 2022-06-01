import React from 'react';
import { Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';


const getItem = (label, key, icon, children) => {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
];


const LeftSidebar = () => {
    return (
        <>
            <Menu items={items} />
        </>
    )
}

export default LeftSidebar