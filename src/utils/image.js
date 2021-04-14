export default {
  getImg: function (index) {
    const image = [
      "https://ftp.bmp.ovh/imgs/2021/04/b36aa6d147470bd0.jpg",
      "https://ftp.bmp.ovh/imgs/2021/04/01dcdcac7b501574.jpg",
      "https://ftp.bmp.ovh/imgs/2021/02/08b20f06b08089b1.jpg",
    ];
    if (index > -1) {
      return image[index];
    } else {
      return image[Math.floor(Math.random() * image.length)];
    }
  },
};
