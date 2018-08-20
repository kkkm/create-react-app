const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
var mongoose = require('mongoose');
const app = express();
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));



var configDB = require('./server/models/index.js');
mongoose.connect(config.dbUri, { useMongoClient: true }); // connect to our database



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

var db = mongoose.connection;


			app.get(["/"], function(req, res) {
				res.sendFile(__dirname + '/server/static/index.html')
			})

				app.post('/postfile', (req, res) => {
				db.collection('simple-react-redux').save(
				req.body
				,  (err, result) => {
				res.json(
				req.body
				)
				})
				})


		app.post('/postsecondfile', (req, res) => {
			var ObjectId = require('mongodb').ObjectID;
			var secondFileId = ObjectId()
			var secondFileName = req.body.secondFileName
				db.collection('simple-react-redux').findOneAndUpdate({
				_id: ObjectId(req.body.fFolderId),
				}, {
					$push: {
					second_folder: {
					_id : secondFileId,
					secondFileName: req.body.secondFileName,
					msgtime:new Date()
					}
					}
				}, {
					'upsert': true,
					'new': true,
					'returnOriginal': false,
				},  (err, result) => {
				})
		})


		app.post('/postthirdfile', (req, res) => {
			var ObjectId = require('mongodb').ObjectID;
			var thirdFileId = ObjectId()
			var secondFileID=ObjectId.createFromHexString(req.body.secondFileId)
			var secondFileName = req.body.secondFileName
				db.collection('simple-react-redux').findOneAndUpdate({
				_id: ObjectId(req.body.fFolderId),
				}, {
					$push: {
					third_file: {
					_id : thirdFileId,
					secondFileId:secondFileID,
					thirdFileName: req.body.thirdFileName,
					msgtime:new Date()
					}
					}

				}, {
					'upsert': true,
					'new': true,
					'returnOriginal': false,
				},  (err, result) => {
				})
		})




	
		app.post('/postfolder', (req, res) => {
			db.collection('simple-react-redux').save(
				req.body
				,  (err, result) => {
				res.json(
				req.body
				)
			})
		})



		app.get('/getsecondfiles/:parentID',function (req, res) {
			var ObjectId = require('mongodb').ObjectID;
			var ids = ObjectId.createFromHexString(req.params.parentID)
				db.collection('simple-react-redux').aggregate([  
						{ $match: {_id:ids}},
					{ "$project": {
					_id: "1",

					"kkm": {
					"$map": {
					"input": { $ifNull: ["$second_folder",[]]},
					"as": "r",
					"in": {
					"_id": ids,
					"Id": { $ifNull: ["$$r._id",[]]},
					"secondFileName": { $ifNull: ["$$r.secondFileName",[]]},
					} 
					},
					}
					}},
				{ "$unwind":  { "path": "$kkm", "preserveNullAndEmptyArrays": true } },
					{
					$project: {
					firstId:'$kkm._id',
					Id: '$kkm.Id',
					secondFileName:'$kkm.secondFileName'
					}
					},
				], function (err, books) {
				if(err){console.log(err + 'profileinfo err')}
				res.json({
				books
				});
				});
		})
	

		app.get('/getthirdfiles/:parentID/:secondField',function (req, res) {
		
			var ObjectId = require('mongodb').ObjectID;
			var ids = ObjectId.createFromHexString(req.params.parentID)
			var secondField = ObjectId.createFromHexString(req.params.secondField)
				db.collection('simple-react-redux').aggregate([

				{ $match: {_id:ids,
				"third_file.secondFileId":secondField
				}},
					
					{ "$project": {
					_id: "1",

					"kkm": {
					"$map": {
					"input": { $ifNull: ["$third_file",[]]},
					"as": "r",
					"in": {
					"_id": ids,
					"Id": { $ifNull: ["$$r._id",[]]},
					"thirdFileName": { $ifNull: ["$$r.thirdFileName",[]]},
					"secondFileId": { $ifNull: ["$$r.secondFileId",[]]},
					} 
					},
					}
					}},
				{ "$unwind":  { "path": "$kkm", "preserveNullAndEmptyArrays": true } },
					{
					$project: {
					firstId:'$kkm._id',
					Id: '$kkm.Id',
					thirdFileName:'$kkm.thirdFileName',
					secondFileId:'$kkm.secondFileId'
					}
					},
				], function (err, books) {
				if(err){console.log(err + 'profileinfo err')}

				console.log(books + 'THIRD')
				res.json({
				books
				});
				});
		})
	

		app.get('/getfolderandfile', (req, res) => {
				db.collection('simple-react-redux').aggregate([
					{
					$project: {

					id   : { $ifNull: ['$_id',[]]},
					filename  : { $ifNull: ['$post_title',[]]}, 
					foldername  : { $ifNull: ['$folder_name',[]]},
					}
					},
				], function (err, books) {
				if(err){console.log(err + 'profileinfo err')}
					res.json({
						books
					});
				});
		})
	


app.listen(3008, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3008');
});
