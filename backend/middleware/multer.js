// const {
//     ref,
//     uploadBytes,
//     listAll,
//     deleteObject,
// } = require("firebase/storage");
// const storage = require("../db/firebase");


// const imageUpload = async (req, res) => {

//     const file = req.file;
//     const imageRef = ref(storage, file.originalname);
//     const metatype = { contentType: file.mimetype, name: file.originalname };
//     await uploadBytes(imageRef, file.buffer, metatype)
//         .then((snapshot) => {
//             res.send("uploaded!");
//         })
//         .catch((error) => console.log(error.message));
// };


// module.exports = imageUpload