import { Table, Tag, Space } from 'antd';
import {   ArrowDownOutlined, ArrowLeftOutlined, ArrowRightOutlined, ArrowUpOutlined } from '@ant-design/icons';
import GridSquare from './gridSquare';

interface Props {
  command: string
}

export default function GridBoardTable({command}: Props) {
  let posy = 0;
  let posx = 0;

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

let board = [
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
      0: <GridSquare />,
      1: <GridSquare />,
      2: <GridSquare />,
      3: <GridSquare />,
      4: <GridSquare />
}
  ];
  //board[0][0] = <ArrowUpOutlined />
  

return(<Table  rowClassName={() => "grid-board"} bordered pagination={false} columns={column} dataSource={board} showHeader={false} />);}