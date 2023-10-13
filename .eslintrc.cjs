module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            },
            "settings": {
                "react": {
                    "version": 'detect',
                },
            },
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "projects": './tsconfig.json'
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": ["warn", {
            semi: false,
            plugins: ['prettier-plugin-tailwindcss'],
            tailwindConfig: './tailwind.config.js',
        }],
    }
}
