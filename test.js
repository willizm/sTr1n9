var str1n9 = require('./sTr1n9.js');
console.log('randomTypeString():' + str1n9.randomTypeString() + '\n');
console.log('randomTypeString(9, p):' + str1n9.randomTypeString(9, 'p') + '\n');
console.log('randomString(null, null, cpcpllnpc)' + str1n9.randomString(9, 'csf', 'cpcpllnpc') + '\n');
console.log('randomString(), 100000 times:');
for (var i = 0, e = 100000; i < e; i++) {
    var tests = {
        c: /[\x41-\x5a]/,
        l: /[\x61-\x7a]/,
        n: /[\d]/,
        p: /[\x21-\x2f]/
    };

    var output = str1n9.randomString();
    if (!tests.c.test(output) || !tests.l.test(output) || !tests.n.test(output) || !tests.p.test(output)) {
        console.log('Test Failed!!!')
        return;
    }
}
console.log('Test OK');
