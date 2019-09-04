<template>
  <div>
    <div>
      <template>
        <a-breadcrumb>
          <a-breadcrumb-item href="">
            <a-icon type="home"/>
          </a-breadcrumb-item>
          <a-breadcrumb-item href="">
            <a-icon type="user" />
            <span>sketch</span>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </template>
      <div>
        <a-table :columns="columns" :dataSource="data">
          <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
          <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
          <span slot="tags" slot-scope="tags">
      <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
    </span>
          <span slot="action" slot-scope="text, record">
      <a href="javascript:;">Invite 一 {{record.name}}</a>
      <a-divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <a-divider type="vertical" />
      <a href="javascript:;" class="ant-dropdown-link">
        More actions <a-icon type="down" />
      </a>
    </span>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
  const columns = [{
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: '名称' },
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '状态',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  }, {
    title: '动作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  }];
  const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }];
  export default {
    name: "Sketch",
    data() {
      return {
        data,
        columns,
      }
    }
  }
</script>

<style scoped>

</style>
