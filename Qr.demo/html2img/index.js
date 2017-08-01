
import { utils, canvas2img } from 'amos-tool';
// import { utils } from 'amos-tool';

// import html2canvas from 'html2canvas';
import html2canvas from 'ray-html2canvas';
// import canvas2img from './tools';

export const convertHtml2canvas = (target) => {
  if(!utils.isHTMLElement(target)){
    target = document.getElementById(target);
  }

  return html2canvas(target).then(canvas => canvas);
};

/**
 * 将html转化为img
 *
 * @export
 * @param {any} options
 * @return Promise
 */
export default function(options){
  /**
   * target: 目标html
   * width: 宽度
   * height: 高度
   * type: 图片类型
   */
  let { target, width, height, type, onlydata } = options;

  console.log(canvas2img);

  return convertHtml2canvas(target).then((canvas) => {
    width || (width = canvas.width);
    height || (height = canvas.height);
    type || (type = 'png');
    if(onlydata){
      const data = canvas2img.convert2data(canvas, type, width, height);
      return data;
    } else {
      const img = canvas2img.convert2Image(canvas, width, height, type);
      return img;
    }
  });
}
