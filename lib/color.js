const chalk = require('chalk');

const color = (text, color) => {
    try {
        if (color && chalk.keyword(color)) {
            return chalk.keyword(color)(text);
        } else {
            return chalk.green(text); // Fallback to green if the color is not valid
        }
    } catch (error) {
        console.error('Invalid color:', color);
        return chalk.green(text); // Fallback to green in case of an error
    }
};

const bgcolor = (text, bgcolor) => {
    try {
        if (bgcolor && chalk.bgKeyword(bgcolor)) {
            return chalk.bgKeyword(bgcolor)(text);
        } else {
            return chalk.green(text); // Fallback to green if the bgcolor is not valid
        }
    } catch (error) {
        console.error('Invalid bgcolor:', bgcolor);
        return chalk.green(text); // Fallback to green in case of an error
    }
};

const XinzLog = (text, color) => {
    return !color ? chalk.yellow('[FAX] ') + chalk.green(text) : chalk.yellow('[XINZ] ') + color(text, color);
};

module.exports = {
    color,
    bgcolor,
    XinzLog
};
