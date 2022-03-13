const {Activity} = require('../db')

exports.list = async (req, res) => { 
    try{ 
        const activities = await Activity.findAll();
        console.log(activities);
        res.json(activities.length > 0 ? activities : "No hay Jugadores creados");
    } catch (e) {
        res.send(e);
    }
}

exports.create = async (req, res) => {
    const { name, difficulty, duration, season } = req.body;

    try {
        let newActivity = await Activity.create(
            {
                name, 
                difficulty, 
                duration, 
                season
            }
        )
        console.log(newActivity.toJSON())
        res.json(newActivity)
    } catch (error) {
        res.send(error);
    }
}