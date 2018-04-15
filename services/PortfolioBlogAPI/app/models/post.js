const mongoose = require('mongoose')
const Schema = mongoose.Schema({
  title: {
         type: String,
         required: true
   },
   content: {
       type: String,
       required: true
   },
   imgUrl: {
       type: String,
       required: true
   },
   flex: {
       type: Number,
       required: true
   },
   user_id: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'User'
   },
})

mongoose.model('Post', Schema)
