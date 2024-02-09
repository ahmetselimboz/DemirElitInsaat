const stream = require("stream");
const express = require("express");
const multer = require("multer");
const upload = multer();
const path = require("path");
const { google } = require("googleapis");





const KEYFILEPATH = path.join(__dirname, "credentials.json");
const SCOPES = ["https://www.googleapis.com/auth/drive"];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

const uploadFile = async (fileObject) => {
  const bufferStream = new stream.PassThrough();
  bufferStream.end(fileObject.buffer);
  return ({ data } = await google.drive({ version: "v3",auth: auth }).files.create({
    media: {
      mimeType: fileObject.mimeType,
      body: bufferStream,
    },
    requestBody: {
      name: fileObject.originalname,
      parents: ["1YRrTpHelBIBz1RLuJueB26qLR3mSI92H"],
    },
    fields: "id,name",
    
  }));

};

const deleteFile = async (fileId) => {


  const sonuc = await google.drive({ version: "v3", auth }).files.delete({fileId:fileId});
  if (sonuc) {
    return sonuc.status
  }

};

module.exports = {
  uploadFile,
  deleteFile
};



