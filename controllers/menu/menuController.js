'use strict'
var menu = require('../../models/menu/menuModel')
var menucategory = require('../../models/menu/menuCategoryModel')
var multer = require('multer')

const upload = multer({
  dest: '../public/images'
})

class Menu {
  createMenu (req, res, next) {
  
      var requestobj = JSON.parse(req.body.body)
      var data = {
          title:requestobj.title,
          description: requestobj.description,
          category_id: requestobj.category_id,
          image:req.file.filename,
          ingredients:requestobj.ingredients,
          price:requestobj.price
      }
       var menumodel = new menu(data)
       console.log(data);
       menumodel.save(function (err, response) {
        if (err) { return res.json(err) }
        return res.status(201), res.json(response)
      })
 
 
  }

  createMenuCategory (req, res, next) {
    console.log(req.body)
    var menucateg = new menucategory(req.body)
    menucateg.save(function (err, response) {
      if (err) { return res.json(err) }
      return res.status(201), res.json(response)
    })
  }

  getCategories (req, res, next) {
    // aggregate with menu items
    menucategory.aggregate([{
      $lookup: {
        from: 'menus',
        localField: '_id',
        foreignField: 'category_id',
        as: 'menu'
      }
    }
    ]).then((err, response) => {
      if (err) { return res.json(err) }
      return res.json(response)
    })
  }

  getMenu (req, res, next) {
    menu.aggregate([{
      $lookup: {
        from: 'menucategories',
        localField: 'category',
        foreignField: '_id',
        as: 'category'
      }
    }]).then((err, response) => {
      if (err) { return res.json(err) }
     return res.json(response)
    })
  }

  deleteCategory(req, res, next){
    menucategory.remove({_id:req.params.id},function(err, task){
      if(err)
          return res.json(err)
      return res.json(task)
  })
  }

  deleteMenuItem(req, res, next){
    menu.remove({_id:req.params.id},function(err, task){
      if(err)
          return res.json(err)
      return res.json(task)
  })
  }

  
}

var menuObj = new Menu()
module.exports = menuObj
