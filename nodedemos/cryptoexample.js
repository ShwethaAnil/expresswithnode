var crypt = require("crypto");
const ciper = crypt.createCipher("aes192","ps");
var encryp = ciper.update('How are you','utf8','hex') ;
encryp+=ciper.final('hex');
console.log(encryp);

const deciper=crypt.createDecipher("aes192","ps");
var decrypt=deciper.update(encryp,'hex','utf8');
decrypt+=deciper.final('utf8');
console.log(decrypt);

