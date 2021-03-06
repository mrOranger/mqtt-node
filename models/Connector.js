const mysql = require('mysql');

class Connector {

    constructor() {
        this.databaseConfig = {
            'host': 'your-host',
            'user': 'your-user',
            'password': 'your-password',
            'database': 'your-database'
        }

        this.database = mysql.createConnection(this.databaseConfig);
        
        this.database.connect(function (error) {
            if (error) {
                throw error;
            }
            console.log('MySQL Connected ...');
        });
    }

    getBoxCode(query, request, response) {
        this.database.query(query, function (error, results) {
            if (error) {
                response.statusCode = 500;
                response.end('Error in the Database connection!');
                throw error;
            } else {
                if (results[0] == undefined) {
                    return response.end('Not a valid ID!');
                }
                return response.json({
                    'DeviceID': results[0].DeviceID,
                    'Code': results[0].BoxCode
                });
            }
        });
    }
}

exports.Connector = Connector;