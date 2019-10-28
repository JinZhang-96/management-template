/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2019-10-28 00:22:42
 * @LastEditors: zb
 * @LastEditTime: 2019-10-28 15:57:49
 */
/**
 * 平行数据转树形函数工具
 * @param data
 * @param attr
 * @returns {any[]}
 */

export function toTreeData(data, attr) {
  let tree = [];
  let resData = data;
  for (let i = 0; i < resData.length; i++) {
    if (resData[i].pId === attr.rootId) {
      let obj = resData[i];
      obj.children = [];
      //   {
      //   id: resData[i][attr.id],
      //   name: resData[i][attr.name],
      //   children: []
      // };
      tree.push(obj);
      resData.splice(i, 1);
      i--;
    }
  }

  let run = function (treeArrs) {
    if (resData.length > 0) {
      for (let i = 0; i < treeArrs.length; i++) {
        for (let j = 0; j < resData.length; j++) {
          if (treeArrs[i].id === resData[j][attr.pId]) {
            let obj = resData[j];
            obj.children = [];
            //   {
            //   id: resData[j][attr.id],
            //   name: resData[j][attr.name],
            //   children: []
            // };
            treeArrs[i].children.push(obj);
            resData.splice(j, 1);
            j--;
          }
        }
        run(treeArrs[i].children);
      }
    }
  };
  run(tree);
  return tree;
}
