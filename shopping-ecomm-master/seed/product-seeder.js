const Product = require('../models/product');

const mongoose = require('mongoose');
mongoose.connect('localhost:27017/shop');

const products = [
  new Product({
    imagePath: 'https://www.dhresource.com/0x0s/f2-albu-g7-M00-FE-08-rBVaSltXNrCAaWGlAAGNPseQcvE645.jpg/5-pcs-mini-hydrangea-flower-bouquet-artificial.jpg',
    title: 'Aromatic Hydrangeas',
    description: 'Fills out arrangements, bouquets and also makes a charming boutonniere!',
    price: 50
  }),
  new Product({
    imagePath: 'https://www.ftdimg.com/pics/products/FG27_330x370.jpg',
    title: 'Dazzling Daisies',
    description: 'Apt as house warming gift or get well soon present!',
    price: 60
  }),
  new Product({
    imagePath: 'https://cdn3.volusion.com/rccqg.lrbyh/v/vspfiles/photos/BQPPN003-2.jpg?1517857156',
    title: 'Classic Orchids',
    description: 'Relevant for congratulating on their accomplishments!',
    price: 75
  }),
  new Product({
    imagePath: 'https://www.veldkampsflowers.com/images/item/zoom_zoomSpiritedGraceLilyBouquetSmall1302276323313032830613.jpg',
    title: 'Exotic Liilies',
    description: 'Suitable for sympathy, newborns!',
    price: 30
  }),
  new Product({
    imagePath: 'https://asset1.cxnmarksandspencer.com/is/image/mands/SD_FD_F44A_00095402_NC_X_EC_90?$PDP_MAIN_LARGE$',
    title: 'Magnificient Pink Roses',
    description: 'Appropriate for platonic/friendly relationships!',
    price: 85
  }),
  new Product({
    imagePath: 'http://paperlief.com/images/tulips-wedding-bouquet-wallpaper-3.jpg',
    title: 'Transcendent Tulips',
    description: 'Elegant for weddings, happy years!',
    price: 85
  })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
  products[i].save(function (err, result) {
    done++;
    if (done === products.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
