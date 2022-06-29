const ObjectId = require('mongodb').ObjectId;
const { collection,collection_admin,collection_User } = require('../models/connect.database')

// get all data -

const data = async (req, res) => {
    const query = {}
    const dataa = collection.find(query)
    const data = await dataa.toArray();
    res.send(data)

  }

// get single data -

const singleData= async (req, res) => {
    const id = req.params.id;
    const query = { _id: ObjectId(id) }
    const data = await collection.findOne(query)
    res.send(data)
  }

// addData

const addData =async (req, res) => {
    console.log(req.body)
    const bodyData=req.body;
      const result = await collection.insertOne(bodyData);
      console.log(result.insertedId);
      res.send(result.insertedId)

    }

// singleUpdate

const singleUpdate=async(req, res)=>{
    const id =req.params.id;
   const updatedUser=req.body;
   const filter = {_id:ObjectId(id)};
   const options = { upsert: true };
   const updateDoc = {
    $set: {
        difficulty:updatedUser.difficulty_label,
        cost:updatedUser.cost,
        definitions:updatedUser.definitions,
        durations:updatedUser.durations,
        img:updatedUser.img,
        title:updatedUser.title,

    },
  };
  const result = await collection.updateOne(filter, updateDoc,options);
  res.send(result)
    console.log(req.body);
}


// deleteSigleData

const deleteSigleData=async (req, res) => {
    const id = req.params.id;
    const query = { _id: ObjectId(id) }
    const result = await collection.deleteOne(query);
    res.send(result);
  }




//   admin

const addAdmin =async (req, res) => {
    console.log(req.body)
    const bodyData=req.body;
      const result = await collection_admin.insertOne(bodyData);
      console.log(result.insertedId);
      res.send(result.insertedId)

    }

const getAdmin=async (req, res) => {
    const query = {}
    const dataa = collection_admin.find(query)
    const data = await dataa.toArray();
    res.send(data)
  }


// UserSelectedCourse

const postUserSelectedCourse= async (req, res) => {
    const bodyData=req.body;
      const result = await collection_User.insertOne(bodyData);
      res.send(result.insertedId)
    }


const getUserSelectedCourse= async (req, res) => {
    const query = {}
    const dataa = collection_User.find(query)
    const data = await dataa.toArray();
    res.send(data)
  }

const deleteUserSelectedSingleCourse=async (req, res) => {
    const id = req.params.id;
    const query = { _id: ObjectId(id) }
    console.log("query",query)
    const result = await collection_User.deleteOne(query);
    console.log("deleting user with id ",id);
    console.log(result);
    res.send(result);
  }

const deleteUserSelectedCourseByEmail=async (req, res) => {
    console.log(req.params.email);
    const query = { email: req.params.email };
    const result = await collection_User.deleteMany(query);
    res.send(result);
  }

module.exports = {
    data,
    singleData,
    addData,
    singleUpdate,
    deleteSigleData,
    addAdmin,
    getAdmin,
    postUserSelectedCourse,
    getUserSelectedCourse,
    deleteUserSelectedSingleCourse,
    deleteUserSelectedCourseByEmail
}
