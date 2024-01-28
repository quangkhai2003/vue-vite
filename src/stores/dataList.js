import { defineStore } from 'pinia';

export const useDataListStore = defineStore({
  id: 'dataList',
  state: () => ({
    dataList: [],
  }),
  actions: {
    setDataList(dataList) {
      this.dataList = dataList;
    },
  },
});