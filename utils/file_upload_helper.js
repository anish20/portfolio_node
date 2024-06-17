const {v4: uuidv4} = require('uuid');
const fs = require('fs');
// const { BASE_URL } = require('../config/environmentVariable');


//Support mimetypes
 const supportMimeTypes=[
    "image/png",
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/webp",
    "image/svg",
    "application/pdf"
]

const imageValidator=(size,mimType)=>{
  if(bytesToMb(size) > 2){
    return "Image size must be less than 2 mb"
  }
  else if(!supportMimeTypes.includes(mimType)){
    return "Image must be png,jpg,jpeg,gif,svg,webp"
  }
  return null;
}

const bytesToMb=(bytes)=>{
  return bytes/(1024 * 1024);
}

 const generateRandonNum=()=>{
    return  uuidv4();
}

 const getImageUrl=(AppUrl,imageName)=>{
  // console.log("ImageNAME>>>",imageName,appURL)
  return `${AppUrl}/blogs/${imageName}`
}
const getBlogImageUrl=(AppUrl,imageName)=>{
  console.log("ImageNAME>>>",imageName,AppUrl)
  return `${AppUrl}/insurance_docs/${imageName}`
}

 const removeImage=(imageName)=>{
  const path=process.cwd() + `/public/insurance_docs/${imageName}`;
  console.log("kya path hai",path)
  if(fs.existsSync(path)){
    fs.unlinkSync(path);
    // return 1;
  } 
}

const removeMultiImage=(imageName)=>{
  if(imageName){
    for(let i=0;i<imageName?.length;i++){
  const path=process.cwd() + `/public/insurance_docs/${imageName[i]}`;
  console.log("kya path hai",path)
  if(fs.existsSync(path)){
    fs.unlinkSync(path);
    console.log("========File Deleted=====")
    // return 1;
  } 
    }
}
}

const uploadImage=(image)=>{
 // Image Upload
 const imgFile=image?.name.split(".");
 const imageName=generateRandonNum() + "." + imgFile[1];
 const uploadPath=process.cwd()+"/public/insurance_docs/" + imageName;
 image.mv(uploadPath,(err)=>{
   if(err) throw err;
 })
 return imageName;
} 

const uploadMulipleImage=(image)=>{
  // Image Upload
  const imgFile=image?.name.split(".");
  const imageName=generateRandonNum() + "." + imgFile[1];
  const uploadPath=process.cwd()+"/public/insurance_docs/" + imageName;
  image.mv(uploadPath,(err)=>{
    if(err) throw err;
  })
  return imageName;
 } 
 


module.exports = {
    supportMimeTypes,
    uploadImage,
    imageValidator,
    generateRandonNum,
    getImageUrl,
    removeImage,
    uploadMulipleImage,
    getBlogImageUrl,
    removeMultiImage
  };