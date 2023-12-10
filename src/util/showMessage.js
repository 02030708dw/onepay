/**
 * 弹出消息
 * @param {String} content 消息内容 
 * @param {String} type 消息类型 info error success warn 
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器,消息会显示到该容器正中; 如果不传,则显示到页面正中
 */
export default function(content,type = 'info',duration = 2000,container){
  //创建消息元素
  const div = document.createElement('div');
  div.innerHTML = content;
}