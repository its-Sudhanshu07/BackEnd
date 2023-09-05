

export default class ProductModel{
constructor( _id, _name, _desc, _price,_imageUrl){
this.id=_id
this.name=_name
this.desc=_desc
this.price=_price
this.imageUrl=_imageUrl
}

static get(){
return products;
}
static add(productObj){
      let newProduct=new ProductModel(
            products.length+1,
            productObj.name,
            productObj.desc,
            productObj.price,
            productObj.imageUrl
      )
      products.push(newProduct)
}

}
var products=[
      new ProductModel(1,'Product 1','Description for product 1', 19.99, 'https://th.bing.com/th/id/OIP.w_BCK5RwCMc8gAxWR9ct9QHaFj?pid=ImgDet&rs=1'),
      new ProductModel(2,'Product 2','Description for product 2', 29.99, 'https://th.bing.com/th/id/OIP.w_BCK5RwCMc8gAxWR9ct9QHaFj?pid=ImgDet&rs=1'),
      new ProductModel(3,'Product 3','Description for product 3', 39.99, 'https://th.bing.com/th/id/OIP.w_BCK5RwCMc8gAxWR9ct9QHaFj?pid=ImgDet&rs=1')
]