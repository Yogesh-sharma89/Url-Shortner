import crypto from "crypto"

const GenerateShortCode = (length:number = 6)=>{

    const bytesLength = Math.ceil(length*3/4) +2; //we take some extra bytes;

    const randomBytes = crypto.randomBytes(bytesLength);

    const webSafeCode = randomBytes.toString("base64url");

    const pureAlphaNumericCode = webSafeCode.replace(/[^a-zA-Z0-9]/g,'');

    return pureAlphaNumericCode.slice(0,length);
}

export default GenerateShortCode;