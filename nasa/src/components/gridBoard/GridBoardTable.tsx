import { Table, Tag, Space } from 'antd';
import { ArrowDownOutlined, ArrowLeftOutlined, ArrowRightOutlined, ArrowUpOutlined } from '@ant-design/icons';
import GridSquare from './gridSquare';
import React from 'react';

type Coordenate = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;

};

interface Props {
  boardData: {
    0: any
    1: any
    2: any
    3: any
    4: any
  }[]
}

export default function GridBoardTable({boardData}: Props) {
  

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

let board = boardData;

  

return(<Table  rowClassName={() => "grid-board"} bordered pagination={false} columns={column} dataSource={board} showHeader={false} />);}