const express = require('express')

const router = express.Router()

const userSignupController = require('../controller/user/userSignup')
const userSigninController = require('../controller/user/userSignin')
const userDetailsController = require('../controller/user/userDetails')
const autherToken = require('../middleware/autherToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const UploadPackageController = require('../controller/offers/uploadpackage')
const getPackageController = require('../controller/offers/getPackage')
const updatepackageController = require('../controller/offers/updatePackage')
const getCategoryList = require('../controller/offers/getCategoryList')
const getCategoryWisePackages = require('../controller/offers/getCategorywisePackages')
const getPackageDetails = require('../controller/offers/getPackageDetails')
const searchPackage = require('../controller/offers/searchPackage')
const deletePackageController = require('../controller/offers/deletePackage')

router.post("/signup",userSignupController)
router.post("/signin",userSigninController)
router.get("/user-details",autherToken,userDetailsController)
router.get("/userLogout",userLogout)

//admin panel 
router.get("/all-users",autherToken,allUsers)
router.post("/update-user",autherToken,updateUser)

//packages
router.post("/upload-package",autherToken,UploadPackageController)
router.get("/get-package",getPackageController)
router.post("/update-package",autherToken,updatepackageController)
router.get("/get-category",getCategoryList)
router.post("/category-wise-package",getCategoryWisePackages)
router.post("/package-details",getPackageDetails)
router.get("/search",searchPackage)
router.post("/delete-package",autherToken,deletePackageController)





module.exports=router