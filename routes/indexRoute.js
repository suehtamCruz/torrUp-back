const express = require('express')
const router = express.Router()

router.getTest = (require,response,next) =>{
    response.status(200).send({
        message:"WELLCOME TO THE TORRUP!!"
    });
}

module.exports = router;