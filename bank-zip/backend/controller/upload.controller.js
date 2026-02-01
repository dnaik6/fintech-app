


const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/bankImages/');

    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }

});
const upload = multer({
    storage
}).single("photo");


const uploadFile = (req, res) => {

    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({error: err.message });
        }
        if (!req.file) {
            return res.status(400).json({ error: err.message });
        }



        return res.status(200).json({ message: 'File uploaded successfully', filePath: req.file.path });
    }





    );};


module.exports ={
    uploadFile
}