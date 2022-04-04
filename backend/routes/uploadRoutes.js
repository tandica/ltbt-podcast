import express from "express";
// import { v2 as cloudinary } from "cloudinary";
import cloudinary from "cloudinary";
import streamifier from "streamifier";
import multer from "multer";
import { isAdmin, isAuth } from "../utils.js";

// const cloudinary = require("cloudinary").v2;
const upload = multer();

const uploadRouter = express.Router();

//upload photos using cloudinary
uploadRouter.post(
  "/",
  isAuth,
  isAdmin,
  upload.single("file"),
  async (req, res) => {
    cloudinary.v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.v2.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };
    const result = await streamUpload(req);
    res.send(result);
  }
);

export default uploadRouter;
