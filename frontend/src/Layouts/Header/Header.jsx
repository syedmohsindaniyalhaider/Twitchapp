
import React from 'react';
import { Menu } from 'antd';

const Header = () => {
    return (
        <>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={new Array(40).fill(null).map((_, index) => {
                    const key = index + 1;
                    return {
                        key,
                        label: `nav ${key}`,
                    };
                })}
            />
        </>
    )
}

export default Header