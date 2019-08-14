'use strict'
var menu = require('../models/menuModel')
var menucategory = require('../models/menuCategoryModel')
var multer = require('multer')

const upload = multer({
    dest: '../public/images'
})

class Menu{

    createMenu(req, res, next){
        if(req.body.category_id !== '' || req.body.category_id === null )
            var menumodel = new menu(req.body)
        
        menumodel.save(function(err, response){
            if(err)
                return res.json(err)
            return res.status(201), res.json(response)
        })

    }

    createMenuCategory(req, res, next){
        console.log(req.body)
        var menucateg = new menucategory(req.body)
        menucateg.save(function(err,response){
            if(err)
                return res.json(err)
            return res.status(201), res.json(response)
        })    
    }

    getCategories(req, res, next){
        //aggregate with menu items
        menucategory.aggregate([{
            $lookup:{
                from:"menus",
                localField:"_id",
                foreignField:"category",
                as:"menu"
            }
            },   
        ]).then((err, response)=>{
            if(err)
                res.json(err)
            res.json(response)
        })
    }

    getMenu(req, res, next){
        menu.aggregate([{
            $lookup:{
                from:"menucategories",
                localField:"category",
                foreignField:"_id",
                as:"category"
            }
        }]).then((err, response)=>{
            if(err)
                res.json(err)
            res.json(response)
        })
    }

   uploadfile(req, res, next){
    //    var file = upload.single('file')
       console.log(req.body)
       return res.status(201),res.json(req.body)
   }
      
    
}

var menuObj = new Menu()
module.exports = menuObj;