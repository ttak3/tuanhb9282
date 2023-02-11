const mysql = require('mysql');
// cấu hình kết nối
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'tuanh'
});

// mở kết nối vớ cấu ình đã cung cấp
db.connect(function(err) {
    if (err) {
        throw new Error('Không thể kết nối CSDL demo_nodejs');
    }
});

module.exports = db;