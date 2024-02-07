 const testController = (req,res) =>{
    res.status(200).send({
        message: 'welcome we are start',
        success: true,
    })
}

module.exports = { testController };