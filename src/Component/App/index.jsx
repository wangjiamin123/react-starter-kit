import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Cascader } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

/* eslint-disable */
import logo from '~/assets/yay.jpg';
/* eslint-disable */

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

class App extends Component {
  render() {
      return (
          <Layout>
              <Header className="header">
                  <div className="logo" >
                  </div>
                  <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['0']} >
                      <Menu.Item key="1"> Menu'sTodoList </Menu.Item>
                      <Menu.Item key="2"> Menu'sLike </Menu.Item>
                      <Menu.Item key="3"> Menu'sComment </Menu.Item>
                  </Menu>
              </Header>
              <Layout>
                  <Sider width={200} style={{ background: '#fff' }}>
                      <Menu mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height:'100%', borderRight:0}}>
                          <SubMenu key="sub1" title={<span><Icon type="user"/>SubMenuOne</span>}>
                              <Menu.Item key="1"> option1 </Menu.Item>
                          </SubMenu>

                          <SubMenu key="sub2" title={<span><Icon type="laptop"/>SubMenuTwo</span>}>
                              <Menu.Item key="2"> option1 </Menu.Item>
                              <Menu.Item key="3"> option2 </Menu.Item>
                          </SubMenu>

                          <SubMenu key="sub3" title={<span><Icon type="notification"/>SubMenuThree</span>}>
                              <Menu.Item key="4"> option1 </Menu.Item>
                              <Menu.Item key="5"> option2 </Menu.Item>
                              <Menu.Item key="6"> option3 </Menu.Item>
                          </SubMenu>
                      </Menu>
                  </Sider>
                  <Layout style={{ padding: '0 24px 24px'}}>
                      <Breadcrumb style={{margin: '16px 0'}}>
                          <Breadcrumb.Item>Home</Breadcrumb.Item>
                          <Breadcrumb.Item>TodoList</Breadcrumb.Item>
                          <Breadcrumb.Item>Like</Breadcrumb.Item>
                          <Breadcrumb.Item>Comment</Breadcrumb.Item>
                      </Breadcrumb>

                      <Content style={{background: "#fff", padding: 24, margin: 0, minHeight: 280}}>
                          <Cascader options={options}   onChange={onChange} placeholder="Please select" />
                      </Content>
                  </Layout>
              </Layout>
          </Layout>
      )
  }
  /*
  return (
    <div className={style.app}>
      <h1>this is a title</h1>
      <Button>button</Button>
      <br />
      <Cascader options={options}   onChange={onChange} placeholder="Please select" />
      <br />
      <img src={logo} width="200" className="App-logo" alt="logo" />
      <br />
      <br />
      <ul>
        <li><Link to="/">index</Link></li>
        <li><Link to="/list">TodoList</Link></li>
        <li><Link to="/like">like</Link></li>
        <li><Link to="/from">from</Link></li>
        <li><Link to="/comment">comment</Link></li>
        <li><Link to="/intl">intl</Link></li>
      </ul>
      <br />
      <Pagination defaultCurrent={1}  total={50} showSizeChanger />
      <br />
      <br />

  </div>
  );
  */
}

export default App;


