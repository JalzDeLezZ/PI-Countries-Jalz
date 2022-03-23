const axios = require('axios');

const { Country, Activity } = require('../db')
//GET/countries
exports.list = async (req, res) => {
    const {name} = req.query;

    if (name) { 
        try {
            const country = await Country.findAll({
                where : {
                    name : name
                }
            });
            res.json(country ? country : "No hay un Pais con dicho Nombre")
        } catch (error) {
            res.send(error)
        }
    }
    else{       
        try {
            let allDBCountry = await Country.findAll();
            if (allDBCountry.length > 0) {
                return res.json(allDBCountry)
            }
            else {

                let aApiFilter = await axios.get(`https://restcountries.com/v3/all`)
                    .then((response) => {
                        let aAllCustomData = response.data.map( pI => {
                            let oCustomData =  {
                                        id          : pI.cca3,
                                        name        : pI.name.common,
                                        image       : pI.flags[1],
                                        continent   : pI.continents && pI.continents[0],
                                        capital     : pI.capital ? pI.capital[0] : "No tiene Capital",
                                        subregion   : pI.subregion ? pI.subregion : "No tiene SubRegion",
                                        area        : pI.area,
                                        poblacion   : pI.population, 
                                    }
                            return oCustomData
                        })
                        return aAllCustomData
                    }) 
                
                aApiFilter.forEach( async e => {
                        await Country.create(e) 
                });

                res.send(aApiFilter);
            } 
        }
        catch (error) {
            console.error(error)
            res.status(500).send(error);
        }
    } 
}
exports.listById = async (req, res) => {
    try {
        let {idPais} = req.params;
        let country = await Country.findByPk(idPais);
        res.json( country ? country : "No hay País con dicho ID  bby");
    } catch (e) {
        res.send(e);
    }
}

exports.allCountriesXActivities = async (req, res) => {
    try {
        let allDBCountry = await Country.findAll({
            include: Activity
        });

        return res.json(allDBCountry)
        
    }
    catch (error) {
        console.error(error)
        res.status(500).send(error);
    }
}
