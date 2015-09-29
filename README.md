This module generates random string of any length, in for Character types: capital(upper case), letter(lower case),
number, punctuation or any combination of them.

## USAGE

    npm install str1n9
    var str1n9 = require('str1n9');
    console.log(str1n9.randomString(8));
    ...
    output: nm!76\'4s
    ...

## Character Types

* capital A-Z
* letter a-z
* number 0-9
* punctuation ASCII 33-47

## API

### randomTypeString([length = 1, charType = 'l'])

Generate random string of any length, in one Character type.

* param [optional] length {Number} default 1
* param [optional] charType {String} default 'l', indicates Character type 'letter', others are 'c', 'n', 'p'.

### randomString([length = 8, types = 'clnp', format = null])

* param [optional] length {Number} default 8
* param [optional] types {String} default 'clnp'
* param [optional] format {String) default null; This param indicates the precise output format, e.g 'cpcpnnlpn' produces
'capital punctuation capital punctuation number number letter punctuation number';if given, the other params would be ignored.

## Examples

    var str1n9 = require('str1n9');

**inputs:**

    console.log(str1n9.randomTypeString());
    console.log(str1n9.randomString());
    console.log(str1n9.randomTypeString(12));
    console.log(str1n9.randomString(12));
    console.log(str1n9.randomTypeString(12, 'c'));
    console.log(str1n9.randomString(12, 'cl'));
    console.log(str1n9.randomString(null,null,'clpnppnlllcnnpc'));

**outputs:**

    o
    9TQ7!Ou7
    pquyvvzsyzqo
    E2#6kzms7!76
    CXUGRQDUJEWR
    XuYNxiXMaaaA
    Hg&3..9xtkG03'N

