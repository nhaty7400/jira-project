import { SearchOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import type { InputRef } from "antd";
import {
  AutoComplete,
  Popover,
  Button,
  Input,
  Space,
  Table,
  Avatar,
} from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import { Tag } from "antd";
import EditIcon from "../../assets/icons/edit.icon";
import DeleteIcon from "../../assets/icons/delete.icon";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface Creator {
  id: number;
  name: string;
}

interface Members {
  userId: number;
  name: string;
  avatar: string;
}

interface DataType {
  id: number;
  projectName: string;
  categoryName: string;
  creator: Creator;
  members: Members[];
  deleted: boolean;
  categoryId: number;
  alias: string;
  description: any;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    members: [
      {
        userId: 5581,
        name: "Abhishek Raj",
        avatar: "https://ui-avatars.com/api/?name=Abhishek Raj",
      },
    ],
    creator: {
      id: 5581,
      name: "Abhishek Raj",
    },
    id: 13436,
    projectName: "ABhkdfkas",
    description: "<p>sdfas</p>",
    categoryId: 3,
    categoryName: "Dự án di động",
    alias: "abhkdfkas",
    deleted: false,
  },
  {
    members: [
      {
        userId: 5328,
        name: "Ngô Thanh Phong",
        avatar: "https://ui-avatars.com/api/?name=Ngô Thanh Phong",
      },
      {
        userId: 3962,
        name: "Đây là tên ",
        avatar: "https://ui-avatars.com/api/?name=Đây là tên ",
      },
    ],
    creator: {
      id: 5583,
      name: "thong",
    },
    id: 13437,
    projectName: "thongtest2",
    description: "<p>abc</p>",
    categoryId: 2,
    categoryName: "Dự án phần mềm",
    alias: "thongtest2",
    deleted: false,
  },
  {
    members: [],
    creator: {
      id: 2417,
      name: "thinh2345",
    },
    id: 13438,
    projectName: "hoang project",
    description: "<p>text</p>",
    categoryId: 1,
    categoryName: "Dự án web",
    alias: "hoang-project",
    deleted: false,
  },
  {
    members: [],
    creator: {
      id: 2417,
      name: "thinh2345",
    },
    id: 13439,
    projectName: "hoang project 1",
    description: "<p>text</p>",
    categoryId: 1,
    categoryName: "Dự án web",
    alias: "hoang-project-1",
    deleted: false,
  },
  {
    members: [
      {
        userId: 5515,
        name: "hoàng",
        avatar: "https://ui-avatars.com/api/?name=hoàng",
      },
      {
        userId: 3962,
        name: "Đây là tên ",
        avatar: "https://ui-avatars.com/api/?name=Đây là tên ",
      },
    ],
    creator: {
      id: 5515,
      name: "hoàng",
    },
    id: 13448,
    projectName: "hoang project 2",
    description: "<p>string</p>",
    categoryId: 3,
    categoryName: "Dự án di động",
    alias: "hoang-project-2",
    deleted: false,
  },
  {
    members: [],
    creator: {
      id: 5575,
      name: "tung tung",
    },
    id: 13450,
    projectName: "Nguyen Quang Quyen",
    description: "<p>123</p>",
    categoryId: 1,
    categoryName: "Dự án web",
    alias: "nguyen-quang-quyen",
    deleted: false,
  },
  {
    members: [],
    creator: {
      id: 5587,
      name: "long",
    },
    id: 13451,
    projectName: "jira5933",
    description: "",
    categoryId: 1,
    categoryName: "Dự án web",
    alias: "jira5933",
    deleted: false,
  },
  {
    members: [
      {
        userId: 2417,
        name: "thinh2345",
        avatar: "https://ui-avatars.com/api/?name=thinh2345",
      },
      {
        userId: 2537,
        name: "Mehmet129",
        avatar: "https://ui-avatars.com/api/?name=Mehmet129",
      },
    ],
    creator: {
      id: 5577,
      name: "long",
    },
    id: 13460,
    projectName: "123",
    description: "<p>456</p>",
    categoryId: 3,
    categoryName: "Dự án di động",
    alias: "123",
    deleted: false,
  },
  {
    members: [],
    creator: {
      id: 5577,
      name: "long",
    },
    id: 13461,
    projectName: "12",
    description: "<p>1314s</p>",
    categoryId: 3,
    categoryName: "Dự án di động",
    alias: "12",
    deleted: false,
  },
  {
    members: [],
    creator: {
      id: 5629,
      name: "123456",
    },
    id: 13463,
    projectName: "eqseqwe",
    description: "<p>eqwewq</p>",
    categoryId: 1,
    categoryName: "Dự án web",
    alias: "eqseqwe",
    deleted: false,
  },
  {
    members: [],
    creator: {
      id: 2417,
      name: "thinh2345",
    },
    id: 13465,
    projectName: "c12",
    description: "string",
    categoryId: 1,
    categoryName: "Dự án web",
    alias: "c12",
    deleted: false,
  },
  {
    members: [
      {
        userId: 2909,
        name: "tên",
        avatar: "https://ui-avatars.com/api/?name=tên",
      },
      {
        userId: 2537,
        name: "Mehmet129",
        avatar: "https://ui-avatars.com/api/?name=Mehmet129",
      },
    ],
    creator: {
      id: 5633,
      name: "Nghĩa",
    },
    id: 13469,
    projectName: "Testabc123",
    description: "",
    categoryId: 2,
    categoryName: "Dự án phần mềm",
    alias: "testabc123",
    deleted: false,
  },
  {
    members: [
      {
        userId: 5634,
        name: "Nghĩa",
        avatar: "https://ui-avatars.com/api/?name=Nghĩa",
      },
      {
        userId: 2417,
        name: "thinh2345",
        avatar: "https://ui-avatars.com/api/?name=thinh2345",
      },
    ],
    creator: {
      id: 5634,
      name: "Nghĩa",
    },
    id: 13470,
    projectName: "Capstone test",
    description: "<p>abc</p>",
    categoryId: 1,
    categoryName: "Dự án web",
    alias: "capstone-test",
    deleted: false,
  },
  {
    members: [
      {
        userId: 2417,
        name: "thinh2345",
        avatar: "https://ui-avatars.com/api/?name=thinh2345",
      },
      {
        userId: 2537,
        name: "Mehmet129",
        avatar: "https://ui-avatars.com/api/?name=Mehmet129",
      },
      {
        userId: 5634,
        name: "Nghĩa",
        avatar: "https://ui-avatars.com/api/?name=Nghĩa",
      },
    ],
    creator: {
      id: 5635,
      name: "Nghĩa",
    },
    id: 13471,
    projectName: "BCS07 TEST",
    description: "<p>ABC</p>",
    categoryId: 1,
    categoryName: "Dự án web",
    alias: "bcs07-test",
    deleted: false,
  },
];

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const navigate = useNavigate();

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      ...getColumnSearchProps("id"),
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
      render: (text, record) => (
        <Link to={`projectDetail/${record.id}`}>{text}</Link>
      ),
      ...getColumnSearchProps("projectName"),
    },
    {
      title: "Category name",
      dataIndex: "categoryName",
      key: "categoryName",
      ...getColumnSearchProps("categoryName"),
    },
    {
      title: "Creator",
      key: "creator",
      render: (text: any, record: DataType, index: number) => {
        return <Tag color="green">{record.creator?.name}</Tag>;
      },
      sorter: (item2, item1) => {
        let creator1 = item1.creator?.name.trim().toLocaleLowerCase();
        let creator2 = item2.creator?.name.trim().toLocaleLowerCase();
        if (creator2 < creator1) {
          return -1;
        }
        return 1;
      },
    },
    {
      title: "Members",
      key: "members",
      width: "30%",
      render: (text: any, record: DataType, index: number) => {
        return (
          <div>
            {record.members?.slice(0, 3).map((member, index) => {
              return <Avatar key={index} src={member.avatar} />;
            })}
            {record.members?.length > 3 ? <Avatar>...</Avatar> : ""}
            <Popover
              placement="bottom"
              title={() => {
                return <span>Bottom</span>;
              }}
              content={() => {
                return <AutoComplete style={{width:"100%",}} />;
              }}
              trigger="click"
            >
              <Button style={{borderRadius:"50%",}}>+</Button>
            </Popover>
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "",
      key: "",
      render: (text: any, record: DataType, index: number) => {
        return (
          <div>
            <button
              onClick={() => {
                navigate(`editProject/${record.id}`);
              }}
              className="btn me-2 btn-primary"
            >
              <EditIcon />
            </button>
            <button className="btn btn-danger">
              <DeleteIcon />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <h3>Project management</h3>
      <Table columns={columns} dataSource={data} />;
    </div>
  );
};

export default Home;
