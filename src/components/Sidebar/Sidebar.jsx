import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/es/Accordion";
import { Link } from "react-router-dom";

const sidebar = [
  {
    name: '系统管理',
    lists: [{
      name: '编码管理',
      path: 'code',
    }],
  },
  {
    name: '基础数据',
    lists: [
      {
        name: 'BOM维护',
        path: 'bom',
      },
      {
        name: '零件管理',
        path: 'comp',
      },
    ],
  },
  {
    name: '权限管理',
    lists: [
      {
        name: '用户管理',
        path: 'user',
      },
      {
        name: '角色管理',
        path: 'role',
      }, {
        name: '菜单管理',
        path: 'menu',
      }, {
        name: '部门管理',
        path: 'manager',
      },
    ],
  },
  {
    name: '订单管理',
    lists: [],
  },
];

class Sidebar extends Component {

  render() {
    return (
      <Accordion>
        {
          sidebar.map(({ name, lists = [] }, idx) => {
            console.log(idx);
            return (
              <Card key={name}>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey={idx.toString()}>
                    {name}
                  </Accordion.Toggle>
                </Card.Header>
                {lists.length > 0 && lists.map(({ name, path }) =>

                  <Accordion.Collapse key={name} eventKey={idx.toString()}>
                    <Card.Body>{path?<Link to={path}>{name}</Link>:name}</Card.Body>
                  </Accordion.Collapse>)
                }
              </Card>
            )
          })
        }
      </Accordion>
    );
  }
}

export default Sidebar;
