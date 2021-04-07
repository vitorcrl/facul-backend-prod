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
            len: [2, 100],
        },
    },
    descricao: {
        allowNull: true,
        type: Sequelize.STRING(200),
        validate: {
            len: [1, 100],
        },
    },
    preco: {
        allowNull: true,
        type: Sequelize.DOUBLE(),
    },
    quantEstoque: {
        allowNull: true,
        type: Sequelize.DOUBLE(),
        defaultValue: true,
    },
});

module.exports = Produto;
