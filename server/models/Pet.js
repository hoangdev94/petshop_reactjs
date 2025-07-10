// models/Pet.js

module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define('Pet', {
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        discount: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        rating: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        isTop: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isNew: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isOutOfStock: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    });

    return Pet;
};
