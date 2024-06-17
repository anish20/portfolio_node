const generateCustomerID=(length)=>{
    return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
}

const generatePolicyNo=(length)=>{
    return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
}

module.exports={generateCustomerID,generatePolicyNo}