export const contentTableConfig = {
  title: '分类列表',
  propList: [
    {
      prop: 'name',
      label: '分类名称',
      minWidth: '300'
    },
    {
      prop: 'pic',
      label: '分类图片',
      slotName: 'img'
    },
    { label: '操作', minWidth: '180', slotName: 'handle' }
  ],
  showIndexColumn: true
};
