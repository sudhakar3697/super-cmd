const { execSync } = require('child_process');

const argArr = [...process.argv];

argArr.shift();
argArr.shift();

const command = argArr[0];
argArr.shift();
const params = argArr.join(' ');

switch (command) {
    case 'exec':
        console.log(execSync(params).toString().trim());
        break;
    case 'ls':
        console.log(execSync('dir /d').toString().trim());
        break;
    case 'll':
        console.log(execSync('dir').toString().trim());
        break;
    case 'md5sum':
        console.log(execSync(`certutil -hashfile "${params}" md5`).toString().trim());
        break;
    default:
        console.log('Invalid command');
}
