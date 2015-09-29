'use strict';

module.exports = {

    randomTypeString: function (length, charType) {
        /**
         * @param length {Number}
         * @param charType {String} enum {c: capital, l: lowercase letter, p: punctuation, n: number}
         */

        charType = charType || 'l';
        length = length || 1;

        var ascii_lower_bound, ascii_upper_bound,
            output = '';

        switch (charType) {
            case 'c':
                ascii_lower_bound = 65;
                ascii_upper_bound = 90;

                break;
            case 'l':
                ascii_lower_bound = 97;
                ascii_upper_bound = 122;

                break;
            case 'p':
                ascii_lower_bound = 33;
                ascii_upper_bound = 47;

                break;
            case 'n':
                ascii_lower_bound = 48;
                ascii_upper_bound = 57;

                break;
        }

        for (var i = 0; i < length; i++) {
            var randCharCode = Math.floor(Math.random() * (ascii_upper_bound - ascii_lower_bound + 1) + ascii_lower_bound);
            output += String.fromCharCode(randCharCode);
        }

        return output;
    },

    randomString : function (length, types, format) {
        /**
         * @param   length  {Number}
         * @param   types   {String}    indicate character types your want, e.g 'cl', 'clpn' in default
         * @param   format  {String}    combination of character ['c', 'l', 'p', 'n'];
         *                              if this params is given, the other params will be ignored
         *                              e.g 'lclpln' indicates letter+capital+letter+punctuation+letter+number
         */

        length = length || 8;
        types = types || 'clpn';
        format = format || null;
        if (format) {
            length = 0;
            types = null;
        }

        var output = '';

        if (length) {
            for (var i = 0; i < length; i++) {
                output += this.randomTypeString(1, types[Math.floor(Math.random()*types.length)]);
            }
            return output;
        }

        for (var i = 0, l = format.length; i < l; i++) {
            output += this.randomTypeString(1, format[i]);
        }
        return output;
    }
};