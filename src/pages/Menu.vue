<template>
  <div>
    <div>
      <a-layout id="components-layout-demo-top-side-2" style="min-height: 100vh">
        <a-layout-header class="header">
          <div class="logo">
            <div style="float: right">
              <a-button type="primary" shape="circle" icon="smile" @click="onOpen"></a-button>
            </div>
          </div>
        </a-layout-header>
        <a-layout>
          <a-layout-sider style="background: #fff" width="200px">
            <a-menu
              mode="inline"
              @openChange="onOpenChange"
              style="width: 200px"
            >
              <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="mail" theme="twoTone"/><span>素质拓展</span></span>
                <a-menu-item key="1" @click="Option('/menu/sketchManage')">素质拓展管理</a-menu-item>
                <a-menu-item key="2" @click="Option('/menu/sketch')">我的素质拓展</a-menu-item>
                <a-menu-item key="3" @click="Option('/menu/sketch')">Option 3</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub2">
                <span slot="title"><a-icon type="appstore" theme="twoTone"/><span>综合素质</span></span>
                <a-menu-item key="4">Option 4</a-menu-item>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                  <a-menu-item key="6">Option 6</a-menu-item>
                  <a-menu-item key="7">Option 7</a-menu-item>
                  <a-menu-item key="8">Option 8</a-menu-item>
                </a-sub-menu>
              </a-sub-menu>
              <a-sub-menu key="sub4">
                <span slot="title"><a-icon type="setting" theme="twoTone"/><span>成绩绩点</span></span>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-menu-item key="11">Option 11</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub5">
                <span slot="title"><a-icon type="book" theme="twoTone"/><span>个人中心</span></span>
                <a-menu-item key="12">Option 12</a-menu-item>
                <a-menu-item key="13">Option 13</a-menu-item>
                <a-menu-item key="14">Option 14</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub6">
                <span slot="title"><a-icon type="cloud" theme="twoTone"/><span>Navigation Five</span></span>
                <a-menu-item key="15">Option 15</a-menu-item>
                <a-menu-item key="16">Option 16</a-menu-item>
                <a-menu-item key="17">Option 17</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub7">
                <span slot="title"><a-icon type="hdd" theme="twoTone"/><span>Navigation Six</span></span>
                <a-menu-item key="18">Option 18</a-menu-item>
                <a-menu-item key="19">Option 19</a-menu-item>
                <a-menu-item key="20">Option 20</a-menu-item>
              </a-sub-menu>
            </a-menu>
          </a-layout-sider>
          <a-layout>
            <div style="height: 40px;padding: 0 16px 0">
              <template>
                <div>
                  <a-tabs hideAdd
                          type="editable-card">
                    <a-tab-pane>
                    </a-tab-pane>
                  </a-tabs>
                </div>
              </template>
            </div>
            <a-layout-content :style="{ background: '#fff', padding: '24px', margin: '0 16px 0', minHeight: '280px' }">
              <router-view></router-view>
            </a-layout-content>
            <a-layout-footer style="text-align: right;height: 20px">
              @everything is possiable
            </a-layout-footer>
          </a-layout>
        </a-layout>
      </a-layout>
    </div>
    <div>
      <a-drawer
        title="个人基本信息"
        placement="right"
        :closable="false"
        @close="onClose"
        :visible="visible"
        :width="600"
      >
        <p>{{new Date()}}</p>
      </a-drawer>
    </div>
  </div>
</template>

<script>
  import ALayoutSider from "ant-design-vue/es/layout/Sider";
  export default {
    name: "Menu",
    components: {ALayoutSider},
    data() {
      return {
        visible: false,
        rootSubmenuKeys: ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6'],
        openKeys: ['sub1'],
        dateNow: '',
      }
    },


    methods: {

      onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : []
        }
      },
      Option: function (path) {
        this.$router.push({path: path})
      },

      onClose: function () {
        this.visible = false;
      },

      onOpen: function () {
        this.visible = true;
      },


      getDateNow:function () {

      }

    },
  }
</script>

<style scoped>
  .ant-layout-header {
    background: #3367D6;
  }
</style>
