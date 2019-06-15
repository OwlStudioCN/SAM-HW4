import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Header from "./components/Header";
import Form from "react-bootstrap/Form";
import Tabs from "react-bootstrap/Tabs";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';


const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Jumbotron>
      <h1>欢迎进入后台管理系统</h1>
    </Jumbotron>,
  },
  {
    path: '/code',
    main: () => <><h2>编码管理</h2>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          Tab1
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Tab2
        </Tab>
        <Tab eventKey="contact" title="Contact">
          Tab3
        </Tab>
      </Tabs></>,
  }, {
    path: '/bom',
    main: () => <>
      <Jumbotron>
        <h1>BOM维护</h1>
      </Jumbotron>
      <Table responsive>
        <thead>
        <tr>
          <th>#</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
        </tr>
        </thead>
        <tbody>
        {
          [...Array(100).keys()].map(idx => <tr>
            <td>{idx}</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>)
        }

        </tbody>
      </Table>
    </>,
  },
  {
    path: "/user",
    main: () => <h2>用户管理</h2>,
  },
  {
    path: "/menu",
    main: () => <h2>菜单管理</h2>,
  }, {
    path: "/manager",
    main: () => <h2>部门管理</h2>,
  },
  {
    path: "/role",
    main: () => <h2>角色管理</h2>,
  },
  {
    path: "/comp",
    main: () => <h2>零件管理</h2>,
  },
  {
    path: "/about",
    main: () => <h2>about</h2>,
  },
  {
    path: '/login',
    main: () => <>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>邮件地址</Form.Label>
          <Form.Control type="email" placeholder="邮件地址" />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>密码</Form.Label>
          <Form.Control type="password" placeholder="密码" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          登录
        </Button>
      </Form>

    </>,
  },
];

class App extends Component {

  render() {
    return (
      <Router>
        <Header />
        <div style={{ marginTop: 56, display: 'flex' }}>
          <div style={{ width: 256 }}>
            <Sidebar />
          </div>
          <main style={{ flex: 1, padding: '1rem' }}>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
