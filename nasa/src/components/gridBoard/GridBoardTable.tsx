import { Table } from "antd";
import React from "react";

interface Props {
  boardData: {
    0: any;
    1: any;
    2: any;
    3: any;
    4: any;
  }[];
}

export default function GridBoardTable({ boardData }: Props) {
  const column = [
    {
      title: "0",
      dataIndex: "0",
      key: "0",
      width: "80px",
    },
    {
      title: "1",
      dataIndex: "1",
      key: "1",
      width: "80px",
    },
    {
      title: "2",
      dataIndex: "2",
      key: "2",
      width: "80px",
    },
    {
      title: "3",
      dataIndex: "3",
      key: "3",
      width: "80px",
    },
    {
      title: "4",
      dataIndex: "4",
      key: "4",
      width: "80px",
    },
  ];

  let board = boardData;

  return (
    <Table
      rowClassName={() => "grid-board"}
      bordered
      pagination={false}
      columns={column}
      dataSource={board}
      showHeader={false}
    />
  );
}
