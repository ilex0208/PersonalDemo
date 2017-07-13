/**
 * 生成formartter
 *
 * @export
 * @param {any} format
 * @returns
 */
export default function generateShowHourMinuteSecond(format) {
  // Ref: http://momentjs.com/docs/#/parsing/string-format/
  console.log('format', format);
  return {
    showHour: (
      format.indexOf('H') > -1 ||
        format.indexOf('h') > -1 ||
        format.indexOf('k') > -1
    ),
    showMinute: format.indexOf('m') > -1,
    showSecond: format.indexOf('s') > -1
  };
}
