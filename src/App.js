import React, { useEffect, useState } from 'react';
import './App.css';
import { database } from './firebase';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;
function App() {

  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  const [data, setData] = useState({ data: null });

  useEffect(() => {
    // event occurs on every data change in DB 
    database.ref().on('value', function (snapshot) {
      setData({ data: snapshot.val() });
    });
  }, data)

  // submit form 
  function handleSubmit(e) {
    e.preventDefault();
    database.ref().set(data);
  }

  // update local state on text change 
  function handleChange(event) {
    const newData = event.target.value;
    setData({
      newData
    });
    console.log('Text changed!!');
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <form className="app--form" onSubmit={handleSubmit}>
    //       <label>
    //         <input type="text" onChange={handleChange} />
    //         <input type="submit" />
    //       </label>
    //     </form>
    //   </header>
    // </div>

    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ahmed Murtaza</Footer>
    </Layout>
  )
}

export default App;
