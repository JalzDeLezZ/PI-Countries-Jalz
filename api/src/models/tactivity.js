const { DataTypes } = require('@sequelize/core');

module.exports = (sequelize) =>{
    
    sequelize.define('Activity', {
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
            validate: {
                is :  /^[a-zA-Zs]{2,45}$/m
            }
        },
        difficulty:  {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                min: 1,
                max: 5,
            }
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        season: {
            type: DataTypes.ENUM,
            values: ["verano", "primavera", "Otoño", "Invierno"]
        },
    }, {
        timestamps: false 
    });
};
