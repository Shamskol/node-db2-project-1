const db = require("../database/dbConfig");



module.exports = {
    get
};


function get() {
return db("cars")

}