module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": ["airbnb"],
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": "babel-eslint",
    "rules": {
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-named-as-default": "off",
        "import/prefer-default-export": "off",
        "jsx-a11y/label-has-for": "off",
        "no-alert": "off",
        "no-underscore-dangle": "off",
        "react/forbid-prop-types": "off",
        "react/prefer-stateless-function": "off"
    },
    "globals": {
        "window": true,
        "document": true 
    }
}