import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ColorPicker, ConfigProvider, Divider, Input, Space } from 'antd';

function App() {
  const [primary, setPrimary] = React.useState('#1677ff');
  return (
    // <ConfigProvider
    //   theme={{
    //     token: {
    //       // Seed Token
    //       colorPrimary: '#00b96b',
    //       borderRadius: 2,

    //       // Alias Token
    //       colorBgContainer: '#f6ffed',
    //     }
    //   }}>
    //   <Space>
    //     <Button type="primary">Primary</Button>
    //     <Button>Default</Button>
    //   </Space>
    // </ConfigProvider>
    <>
      <ColorPicker showText value={primary} onChange={(color) => setPrimary(color.toHexString())} />
      <Divider />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: primary,
          },
        }}
      >
        <Space>
          <Input placeholder="Please Input" />
          <Button type="primary">Submit</Button>
        </Space>
      </ConfigProvider>
    </>
  );
}

export default App;
