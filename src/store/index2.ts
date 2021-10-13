import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';

// 模块化
const store = {
  ...recordStore,
  ...tagStore
};
export default store;