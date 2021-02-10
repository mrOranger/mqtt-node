const mysql = require('mysql');

class Connector {

    constructor() {
        this.databaseConfig = {
            'host': 'localhost',
            'user': 'admin',
            'password': 'admin',
            'databse': 'iot_database'
        }

        this.database = mysql.createConnection(this.databaseConfig);
        
        this.database.connect(function (error) {
            if (error) {
                throw error;
            }
            console.log('MySQL Connected ...');
        });
    }

    getPharaohName(query, request, response) {
        this.database.query(query, function (error, results) {
            console.log("Query: " + query);
            if (error) {
                response.statusCode = 500;
                return response.end('Error in the Database connection!');
            } else {
                console.log("Results: " + results);
                return response.end(results);
            }
        });
    }
}

exports.Connector = Connector;