export default {
  // 随机背景图片
  getImg: function (index) {
    const image = [
      "https://ftp.bmp.ovh/imgs/2021/04/b36aa6d147470bd0.jpg?timestamp=1618450791582",
      "https://ftp.bmp.ovh/imgs/2021/04/01dcdcac7b501574.jpg?timestamp=1618450791582",
      "https://ftp.bmp.ovh/imgs/2021/02/08b20f06b08089b1.jpg?timestamp=1618450791582",
      "https://zyj_yida.gitee.io/source/img/indexbg/8.jpg?timestamp=1618450791582"
    ];
    if (index > -1) {
      return image[index];
    } else {
      return image[Math.floor(Math.random() * image.length)];
    }
  },
  // 随机显示文案
  getText: function (index) {
    const text = [
      { title: '一别两三年, 忽然又夏天。', titleEn: 'Two or three years later, it was summer again.' },
      { title: '羡慕从不盲目，知足也知火候。', titleEn: 'Envy is never blind, contentment is known.' }
    ];
    if (index > -1) return text[index];
    else return text[Math.floor(Math.random() * text.length)];
  }
};
