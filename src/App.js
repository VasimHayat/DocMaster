import React,{Fragment} from "react";
import "./style.css";
import UiTable from "./components/ui.table";
import UiSideBar from "./components/sidebar/ui.sidebar";

import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import logo from "./assets/logo_transparent.png";
import avtar from "./assets/Avatar.png";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const characters = [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ];

    return (
      <div className="section-main">
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo">
              <div className="icons-list">
                <img src={logo} alt="Logo" />
              </div>
            </div>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<FileOutlined />} />
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              <Menu
                theme="dark"
                mode="horizontal" 
                style={{ textAlign: "right" }}
              > 
                <SubMenu
                  title={
                    <Fragment>                      
                      <span>Admin </span>
                      <Avatar style={{ marginLeft: 8 }} src={avtar} />
                    </Fragment>
                  }
                >
                  <Menu.Item key="SignOut">
                    <span>Sign out</span>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Header>
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>

        {/* <Layout>
       
          <Layout>
            <Sider>

                <UiSideBar></UiSideBar>
            </Sider>
            <Content>
            <Header>header</Header>
              <DatePicker />
              <Button type="primary" style={{ marginLeft: 8 }}>
                Primary Button
              </Button>
              <UiTable characterData={characters} />
            </Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout> */}
      </div>
    );
  }
}
