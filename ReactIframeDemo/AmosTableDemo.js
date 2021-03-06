import React, {Component} from 'react';
import AmosTable from 'amos-table';
import 'amos-table/lib/style/actionbar.scss';
// import 'amos-table/lib/style/actionbar.css';


const customPage = {
  size: 'small',
  // current: 1, // 当前页数
  // defaultCurrent: 0, // 默认的当前页数
  total: 50, // 数据总数
  // defaultPageSize: 10, // 初始的每页条数
  pageSize: 10, //每页条数
  showTotal: ()=>{},// 用于显示总共有多少条数据
  // onChange: ()=>{}, // 页码改变的回调，参数是改变后的页码
  showSizeChanger: true, // 是否可以改变 pageSize
  // onShowSizeChange: ()=>{}, // pagesize 变化时回调
  showQuickJumper: true, // 快速跳转
  // simple: {},//当添加该属性时，显示为简单分页
  pageSizeOptions: ['10', '20', '30', '40'] // 指定每页可以显示多少条
};

const _columns = [{
  title: '姓名',
  dataIndex: 'name'
}, {
  title: '年龄',
  dataIndex: 'age'
}, {
  title: '住址',
  dataIndex: 'address'
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `ilex${i}`,
    age: 32,
    address: `西湖区湖底公园${i}号`
  });
}

class AmosTableDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],  // 这里配置默认勾选列
      loading: false,
      current: 0
    };
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page
    });
  }


  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };

    const actionBarProps = {
      showColumnPicker: true,
      defaultColumns: ['name']
    };
    return (
      <div>
        <AmosTable rowSelection={rowSelection} columns={_columns} dataSource={data} pagination={customPage} actionBarProps={actionBarProps} />
      </div>
    );
  }
}

export default AmosTableDemo;
