import { Table, Tag, Space } from 'antd';
import {   ArrowDownOutlined, ArrowLeftOutlined, ArrowRightOutlined, ArrowUpOutlined } from '@ant-design/icons';
import GridSquare from './gridSquare';

export default function GridBoardTable() {
const column = [
  {
    title: '0',
    dataIndex: '0',
    key: '0',
  },
  {
    title: '1',
    dataIndex: '1',
    key: '1',
  },
  {
    title: '2',
    dataIndex: '2',
    key: '2',
  },
  {
    title: '3',
    dataIndex: '3',
    key: '3',
  },
  {
    title: '4',
    dataIndex: '4',
    key: '4',
  }
]

const board = [
    {
        0: <GridSquare />,
        1: <GridSquare />,
        2: <GridSquare />,
        3: <GridSquare />,
        4: <GridSquare />

    },
    {
        0: <GridSquare />,
        1: <GridSquare />,
        2: <GridSquare />,
        3: <GridSquare />,
        4: <GridSquare />
    },
    {
        0: <GridSquare />,
        1: <GridSquare />,
        2: <GridSquare />,
        3: <GridSquare />,
        4: <GridSquare />
    },
    {
        0: <GridSquare />,
        1: <GridSquare />,
        2: <GridSquare />,
        3: <GridSquare />,
        4: <GridSquare />
  },
  {
      0: <ArrowUpOutlined />,
      1: <ArrowDownOutlined />,
      2: <ArrowLeftOutlined />,
      3: <ArrowRightOutlined />,
      4: <GridSquare></GridSquare>
}
  ];

return(<Table  rowClassName={() => "grid-board"} bordered pagination={false} columns={column} dataSource={board} showHeader={false} />);}