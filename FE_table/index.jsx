import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    address: 'Sidney No. 1 Lake Park',
  },
];

class TableCom extends React.Component {
  state = {};

  render() {
    return (
      <div style={{ display: 'f', width: '600px' }}>
        <div>
          <Table columns={columns} dataSource={data} size="middle" />
        </div>
        <div></div>
      </div>
    );
  }
}

export default TableCom;
