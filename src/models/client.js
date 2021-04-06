// Define que estamos utilizando o sequelize
const Sequelize = require("sequelize");

// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require("../database/database.js");

// Cria tabela no BD e seus campos
const Produto = sequelize.define("produto", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100],
        },
    },
    descricao: {
        allowNull: false,
        type: Sequelize.STRING(200),
        validate: {
            len: [1, 100],
        },
    },
    preco: {
        allowNull: false,
        type: Sequelize.STRING(),
    },
    quantEstoque: {
        allowNull: false,
        type: Sequelize.NUMBER(),
        defaultValue: true,
    },
});

module.exports = Produto;
