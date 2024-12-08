import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

export default [
    {
        name : 'app/files-to-lint',
        files: ['**/*.{js,mjs,jsx,vue}'],
    },

    {
        name   : 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    },

    js.configs.recommended,
    ...pluginVue.configs['flat/recommended'],

    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType : 'module',
            globals    : {
                process: true, // Define `process` as a global variable
            },
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            'no-console'                    : process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger'                   : process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            indent                          : ['error', 4, {SwitchCase: 1}],
            'key-spacing'                   : [2, {align: 'colon'}],
            'vue/html-indent'               : ['error', 4, {
                attribute                : 1,
                baseIndent               : 1,
                closeBracket             : 0,
                alignAttributesVertically: true,
                ignores                  : []
            }],
            // 'vue/multi-word-component-names': [0, 'error', {
            //     ignores: ['default']
            // }],
            semi                     : [1, 'always'],
            'vue/no-v-model-argument': 'off'
        },
    }
];
