import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

export class GoodsList extends Component {
  static displayName = GoodsList.name;

  constructor(props) {
    super(props);
    this.state = { goods: [], loading: true };
  }

  componentDidMount() {
    this.populateGoodsData();
  }

  static renderGoodsTable(goods) {
    const { SearchBar, ClearSearchButton  } = Search;
    const columns = [{
      dataField: 'name',
      text: 'Name',
      searchable: true
    }, {
      dataField: 'price',
      text: 'Price',
      searchable: false,
      formatter: cell => `$${cell}`
    }];

    return (
      <ToolkitProvider
        keyField="id"
        data={ goods }
        columns={ columns }
        search
      >
        {
          props => (
            <div>
              <SearchBar { ...props.searchProps } />
              <ClearSearchButton { ...props.searchProps } />
              <hr />
              <BootstrapTable rowStyle={ (row, rowIndex) => { return { backgroundColor: rowIndex % 2 === 0 ? '#f7f1c8' : '#fffef7' }; }}
                { ...props.baseProps }
              />
            </div>
          )
        }
      </ToolkitProvider>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : GoodsList.renderGoodsTable(this.state.goods);
    return (
      <div>
        <h1>Goods list</h1>
        {contents}
      </div>
    );
  }

  async populateGoodsData() {
    const response = await fetch('goods');
    const data = await response.json();
    this.setState({ goods: data, loading: false });
  }
}
