const utils = require("./utils.js");
const web3 = require("web3");


const seedPair = {
    serverSeed : "e0ad1a92e2267772ac0f8ea46be2e50a0b9376107c89d1829611ebb4cb658174",
    clientSeed : "@@@@@@@@@@@@@@@@@@"
}

function xor(hex1, hex2) {
    const buf1 = Buffer.from(hex1, 'hex');
    console.log(buf1);
    const buf2 = Buffer.from(hex2, 'hex');
    console.log(buf2);
    const bufResult = buf1.map((b, i) => b ^ buf2[i]);
    return bufResult.toString('hex');
  }

// Hmac(K,m) = H ((K' ⊕ opad ) || H ((K' ⊕ ipad ) || m))

var i = web3.utils.asciiToHex("\\");
var o = web3.utils.hexToUtf8("0x36");
var OPAD = "5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c";
var IPAD = "3636363636363636363636363636363636363636363636363636363636363636";
var k = "e0ad1a92e2267772ac0f8ea46be2e50a0b9376107c89d1829611ebb4cb658174";
var m = "e0ad1a92e2267772ac0f8ea46be2e50a0b9376107c89d1829611ebb4cb658174";
console.log(i);
console.log(utils.hex2bin(i));
console.log(o);
var KxorOpad = xor(k,OPAD);
var KxorIpad = xor(k,IPAD);
var KxorIpadcombineM = KxorIpad + m;
//d69b2ca4d41041449a39b8925dd4d33c3da540264abfe7b4a027dd82fd53b742e0ad1a92e2267772ac0f8ea46be2e50a0b9376107c89d1829611ebb4cb658174

console.log(KxorOpad);
console.log(KxorIpad);
console.log(KxorIpadcombineM);

console.log(web3.eth.accounts.privateKeyToAddress("0x5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c"));
console.log(web3.eth.accounts.privateKeyToAddress("0x5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c"));
//
///5c \   /36 6
