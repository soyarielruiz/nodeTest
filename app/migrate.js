const exec = require('child_process').exec;
const child = exec(' mysqldump -u root -p qwerty123 fizzmod < dump_data.sql');
