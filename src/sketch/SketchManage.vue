<template>
  <div>
    <div>
      <a-row>
        <a-col :span="8">
          <a-card>
            <a-form :form="sketchManageForm">
              <a-form-item label="素质拓展名称" :label-col="{span:4}" :wrapper-col="{span:12}">
                <a-input style="width: 200px" v-model="sketchManageForm.sketchName"></a-input>
              </a-form-item>
              <a-form-item label="素质拓展类型" :label-col="{span:4}" :wrapper-col="{span:12}">
                <a-select style="width: 200px" @change="handleChange" v-model="sketchManageForm.sketchType">
                  <a-select-option v-for="sketchType in sketchTypeData" :key="sketchType">{{sketchType}}
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="参与角色" :label-col="{span:4}" :wrapper-col="{span:12}">
                <a-select style="width: 200px" @change="handleChange" v-model="sketchManageForm.sketchPart">
                  <a-select-option v-for="sketchPart in sketchPartData" :key="sketchPart">{{sketchPart}}
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="参与时间" :label-col="{span:4}" :wrapper-col="{span:12}">
                <a-date-picker @change="onChange" v-model="sketchManageForm.createDate"></a-date-picker>
              </a-form-item>
              <a-button type="primary" @click="submitSketchManageForm">提交</a-button>
              <a-button type="primary" @click="resetSketchManageForm">重置</a-button>
            </a-form>
          </a-card>
        </a-col>
        <a-col :span="16">
          <a-card>
            <a-table
              :colums="columns"
              rowKey="id"
              :dataSource="sketchManageData"
              @change="handleTableChange"
              bordered
              size="small"
              style="height: 80vh"
            ></a-table>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
  import Config from "@/Config";
  import AFormItem from "ant-design-vue/es/form/FormItem";
  import moment from "moment"
  import ARow from "ant-design-vue/es/grid/Row";
  import ACol from "ant-design-vue/es/grid/Col";

  export default {
    name: "SketchManage",
    components: {ACol, ARow, AFormItem},
    data() {
      return {
        imageUrl: '',
        sketchManageData: [],
        sketchTypeData: [],
        sketchPartData: {
          value1: '参与者',
          value2: '组织者',
          value3: '获奖者1',
          value4: '获奖者2',
          value5: '获奖者3',
        },
        sketchManageForm: {
          sketchName: '',
          sketchType: '',
          createDate: null,
          sketchPart: '',
        },
        columns:[{
          title: '名称',
          dataIndex: 'sketchName',
          key:'sketchName',
        }, {
          title: '类型',
          dataIndex: 'type',
          key:'type',
        }, {
          title: '分数',
          dataIndex: 'sketchScore',
          key:'sketchScore',
        }, {
          title: '角色',
          dataIndex:'sketchPart',
          width: '20%',
        }, {
          title: '状态',
          dataIndex:'sketchStates',
          width: '20%',
        }],
        pagination:{
          pageSize:10,
        }
      }
    },

    mounted() {
      this.getSketchTypeName();
      this.getPersonalSketch();
    },

    methods: {
      handleChange: function (value) {
        console.log(value);
      },

      /**
       * @description时间格式转换
       * **/
      onChange: function (data, toString) {
        console.log(data, toString);
        console.log(moment(toString).format('YYYY-MM-DD'))
      },

      /**
       * @description获取类型
       * **/
      getSketchTypeName: function () {
        this.$http.get(Config.sketchScore + '/findType').then((response => {
          if (response.data.code == '200') {
            this.sketchTypeData = response.data.data;
          } else {
            console.log("error");
          }
        }))
      },

      /**
       * @description上传保存
       * **/
      submitSketchManageForm: function () {
        console.log(this.sketchManageForm);
        const form = {
          sketchName: this.sketchManageForm.sketchName,
          sketchPart: this.sketchManageForm.sketchPart,
          type: this.sketchManageForm.sketchType,
          createDate: moment(this.sketchManageForm.createDate.toString()).format('YYYY-MM-DD'),
        }
        console.log(form)
        this.$http.post(Config.sketch + '/update', form).then((response => {
          if (response.data.code == '200') {
            this.$message.success('保存成功');
            this.resetSketchManageForm();
          } else {
            this.$message.error('保存失败');
          }
        }))
      },


      /**
       * @description重置
       * **/
      resetSketchManageForm: function () {
        this.sketchManageForm.createDate = null;
        this.sketchManageForm.sketchType = '';
        this.sketchManageForm.sketchPart = '';
        this.sketchManageForm.sketchName = '';
      },


      /**
       * @description获取个人素质拓展分详情
       * **/
      getPersonalSketch: function () {
        this.$http.get(Config.sketch + '/findFuzzy').then((response => {
          if (response.data.code == '200') {
            this.sketchManageData = response.data.data.content;
            console.log(this.sketchManageData);
          } else {

          }
        }))
      },

      handleTableChange: function () {

      },


    },
  }
</script>

<style scoped>

</style>
