const { response } = require('express');
const {Activity, Country} = require('../db');

exports.list = async (req, res) => { 
    try{ 
        //select * from Activity
        const activities = await Activity.findAll();
        res.json(activities.length > 0 ? activities : "No hay Jugadores creados");
    } catch (e) {
        res.send(e);
    }
}

exports.create = async (req, res) => {
    const { name, difficulty, duration, season } = req.body;

    try {
        //INSERT INTO Activity (columnN) VALUES (valueN);
        let newActivity = await Activity.create(
            {
                name, 
                difficulty, 
                duration, 
                season
            }
        )

        // console.log(newActivity.toJSON())
        res.json(newActivity)
    } catch (error) {
        res.send(error);
    }
}
exports.activByPk = async(req, res) => {
    try {
        let {identity} = req.params;
        console.log(identity)
        let responseQuery = await Activity.findByPk(identity)
        res.json( responseQuery ? responseQuery : "No hay Actividad con dicho ID  bby");
    } catch (error) {
        res.send(error);
    }
}

exports.createXcountry = async(req, res) => {
    try {
    const { name, difficulty, duration, season, countries} = req.body;
    // let {idActiv} = req.params;

    if(!name|| !difficulty|| !duration|| !season) return res.status(404).send("No Hay Actividad")

    const newActivity = {
        name,
        difficulty,
        duration,
        season
    }
    
    let [activInsert, created] = await Activity.findOrCreate({
        where: newActivity
    })
    if (created) {
        console.log("La Actividad ",activInsert.name, "Ya fue creada");
    }
    //   console.log(activInsert.dataValues)

    if (countries.length > 0) {
        let aVerificationCountry = countries.map( async (pI)=> {
            const wDataCountry = await Country.findByPk(pI)
            return wDataCountry instanceof Country
        })
        resultVerification = await Promise.all(aVerificationCountry);
        if (resultVerification.includes(false)) {
            return res.send("No Contienes Países Válidos")
        }
        else {
            const oActivity = await Activity.findOne({where : {name : name}})
            // const activId = oActivity.dataValues.id
            // console.log("=>>>>>>",oActivity, countries)
            res.json(await oActivity.addCountry(countries));
        }
    }
    } catch (error) { res.send(error) }
}