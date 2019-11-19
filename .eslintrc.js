module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "commonjs": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "arrowFunctions": true,
            "classes": true,
            "modules": true,
            "defaultParams": true
        },
        "sourceType": "module",
        "ecmaVersion": 7
    },
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": [0, "windows"], //换行风格
        "indent": [1, 4], //缩进风格
        "camelcase": 2, //强制驼峰法命名
        "no-var": 0,
        "no-empty": 0,
        "comma-dangle": 0,
        "no-unused-vars": 0,
        "no-console": 0,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-duplicate-case": 2,
        "no-extra-parens": [2, "functions"],
        "no-self-compare": 2,
        "accessor-pairs": 2,
        "comma-spacing": [2, {
            "before": false,
            "after": true
        }],
        "constructor-super": 2,
        "new-cap": [2, {
            "newIsCap": true,
            "capIsNew": false
        }],
        "new-parens": 2,
        "no-array-constructor": 2,
        "no-class-assign": 2,
        "no-cond-assign": 2
    }
};