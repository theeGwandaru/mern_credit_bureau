let institutionService = require('../services/InstitutionService');

module.exports = {
    createInstitution: (req, res, next)=>{

        let institution = req.body;
        institutionService.createInstitution(institution)
        .then((institution)=>{
            console.log(institution);
            res.json(institution);
        })
        .catch((err)=>{
            console.log('error is' + err);
            res.status(500).json({error: err});
        })
    }
}