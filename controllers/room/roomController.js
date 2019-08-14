'use strict'
var roomCategories = require('../../models/roomCategoryModel');
var Room = require('../../models/roomModel');
class roomController{
   
    createCategory(req, res, next){
        var roomCategory = new roomCategories(req.body);
        roomCategory.save(function(err, response){
            if(err)
                return res.json(err)
            return res.json(response)
        })
    }

    createRoom(req,res, next){
        var requestobj = req.body
        console.log(requestobj)
        var data = {
            title:requestobj.title,
            description: requestobj.description,
            categoryid: requestobj.category,
            no_of_people: requestobj.no_of_people,
            // image:req.file.filename,
            image:"none",
            cost:requestobj.cost
        }
        var room = new Room(data)
        room.save(function(err,response){
            if(err)
                return res.json(err)
            return res.json(response)
        })
        
    }

    getRooms(req, res, next){
        roomCategories.aggregate([{
            $lookup:{
                from:"rooms",
                localField:"_id",
                foreignField:"categoryid",
                as:"rooms"
            }
            },   
        ]).then((err, response)=>{
            if(err)
                return res.json(err)
            return res.json(response)
        })
    }

    editRoom(){

    }
    deleteRoom(){
        
    }
}

var room = new roomController();
module.exports = room;