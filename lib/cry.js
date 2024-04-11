// import CryptoJS from "crypto-js";
const CryptoJS = require('crypto-js')

const KEY = '2c4add8f849a7bea';
const IV = 'dc4b73b33e69eaff';

function encrypt(text) {
    const publicKey = CryptoJS.enc.Utf8.parse(KEY)
    const iv = CryptoJS.enc.Utf8.parse(IV)
    // text = JSON.parse(text);
    // text = CryptoJS.enc.Base64.parse(text.ct)
    let encrypt = CryptoJS.AES.encrypt(text, publicKey, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv
    });
    // console.log(encrypt)
    return encodeURIComponent(encrypt.toString())
  }
  
function decrypt(encryptedText) {
    const publicKey = CryptoJS.enc.Utf8.parse(KEY)
    const iv = CryptoJS.enc.Utf8.parse(IV)
    encryptedText = decodeURIComponent(encryptedText)
    let decrypt = CryptoJS.AES.decrypt(encryptedText, publicKey, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv
    });
    // console.log(decrypt)
    return CryptoJS.enc.Utf8.stringify(decrypt).toString()
  }

module.exports = {
    encrypt, decrypt
}
console.log(decrypt("bwhOI1XTu3Np3lKgLbhS6Zdv0xP424o0vBbX3CPP8Wx77GJIHA%2BGS6aAEvpClbpTKgg0dKRcdVfzKbGPGLxRKw%3D%3D"))