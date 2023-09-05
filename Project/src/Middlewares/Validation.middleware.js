 const validateRequest = (req,res,next) => {

     //Validation of Data
     const {name,price,imageUrl}=req.body;
     const errors=[];
     if(!name || name.trim==''){
       errors.push("Name is required");
     }
     if(!price || parseFloat(price)<1){
       errors.push("Price is positive value");
     }
     try{
       new URL(imageUrl)
     }catch(err){
       errors.push("URl is invalid")
     }
     if(errors.length>0){
      return  res.status(401).render('new-product',{errors,success:false});
     }
      next();

}
export default validateRequest;