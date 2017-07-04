const RE_IMAGE = /\.(jpg|jpeg|png|gif|bmp|webp)$/;
const RE_VIDEO = /\.(mp4|avi|flv|mpeg|wmv|webm)$/;
const RE_AUDIO = /\.(aac|m4b|mp3)$/;

export const formatSize = (size) => {
  size = parseFloat(size);
  const prefixesSI = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'],
    base = 1024;
  let index = size ? Math.floor(Math.log(size) / Math.log(base)) : 0;
  index = Math.min(index, prefixesSI.length - 1);
  let powedPrecision = Math.pow(10, index < 2 ? 0 : (index > 2 ? 2 : 1));
  size = size / Math.pow(base, index);
  size = Math.round(size * powedPrecision) / powedPrecision;
  return size + prefixesSI[index] + 'B';
};

export const parseSize = (size) => {
  if(!size){
    return 0;
  }

  if (typeof size !== 'string') {
    return size;
  }

  const units = {
    t: 1099511627776,
    g: 1073741824,
    m: 1048576,
    k: 1024
  };

  size = /^([0-9\.]+)([tgmk]?)b?$/i.exec(size);
  const u = size[2];
  size = +size[1];

  if (units.hasOwnProperty(u)) {
    size *= units[u];
  }
  return size;
};

const validateFile = {
  isImage: (fileName) => {
    return RE_IMAGE.test(fileName);
  },
  isAudio: (fileName) => {
    return RE_AUDIO.test(fileName);
  },
  isVideo: (fileName) => {
    return RE_VIDEO.test(fileName);
  }
};

export default validateFile;
