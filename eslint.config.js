import babelParser from '@babel/eslint-parser';
import js from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticPlus from '@stylistic/eslint-plugin-plus';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.builtin,
        ...globals.mocha,
        ...globals.node,
        ...globals.nodeBuiltin,
        ...globals.serviceworker,
        ...globals.worker,
      },
      parser: babelParser,
      parserOptions: {
        babelOptions: {
          parserOpts: {
            plugins: [
              [
                'importAttributes',
                {
                  deprecatedAssertSyntax: true,
                },
              ],
            ],
          },
        },
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
      },
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      '@stylistic/plus': stylisticPlus,
    },
    rules: {
      '@stylistic/js/array-bracket-newline': [
        'error',
        {
          multiline: true,
        },
      ],
      '@stylistic/js/array-bracket-spacing': [
        'error',
        'never',
      ],
      '@stylistic/js/array-element-newline': [
        'error',
        {
          ArrayExpression: 'always',
          ArrayPattern: 'consistent',
        },
      ],
      '@stylistic/js/arrow-parens': 'error',
      '@stylistic/js/arrow-spacing': 'error',
      '@stylistic/js/block-spacing': 'error',
      '@stylistic/js/brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true,
        },
      ],
      '@stylistic/js/comma-dangle': [
        'error',
        'always-multiline',
      ],
      '@stylistic/js/comma-spacing': 'error',
      '@stylistic/js/comma-style': 'error',
      '@stylistic/js/computed-property-spacing': 'error',
      '@stylistic/js/dot-location': [
        'error',
        'property',
      ],
      '@stylistic/js/eol-last': 'error',
      '@stylistic/js/func-call-spacing': 'error',
      '@stylistic/js/function-paren-newline': [
        'warn',
        'multiline-arguments',
      ],
      '@stylistic/js/generator-star-spacing': [
        'error',
        {
          after: true,
          before: false,
        },
      ],
      '@stylistic/js/implicit-arrow-linebreak': [
        'error',
        'beside',
      ],
      '@stylistic/js/indent': [
        'error',
        2,
        {
          ArrayExpression: 'first',
          CallExpression: {
            arguments: 'first',
          },
          FunctionDeclaration: {
            parameters: 'first',
          },
          FunctionExpression: {
            parameters: 'first',
          },
          ImportDeclaration: 'first',
          MemberExpression: 'off',
          ObjectExpression: 'first',
          SwitchCase: 1,
          VariableDeclarator: 'first',
          ignoredNodes: [
            'ConditionalExpression',
            'JSXElement *',
            'ObjectPattern',
            'TemplateLiteral',
          ],
        },
      ],
      '@stylistic/js/jsx-quotes': 'error',
      '@stylistic/js/key-spacing': 'error',
      '@stylistic/js/keyword-spacing': [
        'error',
        {
          after: true,
          before: true,
        },
      ],
      '@stylistic/js/line-comment-position': [
        'error',
        { ignorePattern: 'pragma' },
      ],
      '@stylistic/js/lines-around-comment': [
        'error',
        {
          afterHashbangComment: true,
          beforeBlockComment: false,
        },
      ],
      '@stylistic/js/lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],
      '@stylistic/js/max-len': [
        'error',
        {
          code: 120,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          tabWidth: 2,
        },
      ],
      '@stylistic/js/multiline-comment-style': [
        'error',
        'separate-lines',
      ],
      '@stylistic/js/new-parens': 'error',
      '@stylistic/js/newline-per-chained-call': 'off',
      '@stylistic/js/no-extra-parens': [
        'warn',
        'functions',
      ],
      '@stylistic/js/no-extra-semi': 'error',
      '@stylistic/js/no-mixed-operators': 'error',
      '@stylistic/js/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/js/no-multi-spaces': 'error',
      '@stylistic/js/no-multiple-empty-lines': [
        'error',
        {
          max: 2,
          maxBOF: 0,
          maxEOF: 1,
        },
      ],
      '@stylistic/js/no-tabs': 'error',
      '@stylistic/js/no-trailing-spaces': 'error',
      '@stylistic/js/no-whitespace-before-property': 'error',
      '@stylistic/js/nonblock-statement-body-position': [
        'error',
        'beside',
        {
          overrides: {
            while: 'below',
          },
        },
      ],
      '@stylistic/js/object-curly-newline': [
        'error',
        {
          ExportDeclaration: {
            minProperties: 2,
            multiline: true,
          },
          ImportDeclaration: {
            minProperties: 2,
            multiline: true,
          },
          ObjectExpression: {
            consistent: true,
            minProperties: 3,
            multiline: true,
          },
          ObjectPattern: {
            consistent: true,
          },
        },
      ],
      '@stylistic/js/object-curly-spacing': [
        'error',
        'always',
      ],
      '@stylistic/js/object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      '@stylistic/js/one-var-declaration-per-line': 'error',
      '@stylistic/js/operator-linebreak': [
        'error',
        'before',
        {
          overrides: {
            '=': 'after',
          },
        },
      ],
      '@stylistic/js/padded-blocks': [
        'error',
        {
          classes: 'always',
        },
        {
          allowSingleLineBlocks: true,
        },
      ],
      '@stylistic/js/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          next: '*',
          prev: 'class',
        },
        {
          blankLine: 'always',
          next: '*',
          prev: 'default',
        },
        {
          blankLine: 'always',
          next: '*',
          prev: 'multiline-block-like',
        },
        {
          blankLine: 'always',
          next: '*',
          prev: [
            'const',
            'let',
            'var',
          ],
        },
        {
          blankLine: 'any',
          next: [
            'const',
            'let',
            'var',
          ],
          prev: [
            'const',
            'let',
            'var',
          ],
        },
        {
          blankLine: 'always',
          next: 'return',
          prev: '*',
        },
        {
          blankLine: 'never',
          next: 'import',
          prev: 'import',
        },
      ],
      '@stylistic/js/quote-props': [
        'error',
        'as-needed',
      ],
      '@stylistic/js/quotes': [
        'error',
        'single',
        {
          allowTemplateLiterals: false,
          avoidEscape: true,
        },
      ],
      '@stylistic/js/rest-spread-spacing': [
        'error',
        'never',
      ],
      '@stylistic/js/semi': [
        'error',
        'always',
      ],
      '@stylistic/js/semi-spacing': [
        'error',
        {
          after: true,
          before: false,
        },
      ],
      '@stylistic/js/semi-style': 'error',
      '@stylistic/js/space-before-blocks': [
        'error',
        'always',
      ],
      '@stylistic/js/space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          asyncArrow: 'always',
          named: 'never',
        },
      ],
      '@stylistic/js/space-in-parens': 'error',
      '@stylistic/js/space-infix-ops': 'error',
      '@stylistic/js/space-unary-ops': [
        'warn',
        {
          nonwords: false,
          words: true,
        },
      ],
      '@stylistic/js/spaced-comment': [
        'error',
        'always',
        {
          block: {
            balanced: true,
            exceptions: [
              '!',
              '*',
              '+',
              '/',
              '<',
              '>',
              '-',
            ],
          },
          line: {
            exceptions: [
              '!',
              '*',
              '+',
              '/',
              '<',
              '>',
              '-',
            ],
          },
        },
      ],
      '@stylistic/js/switch-colon-spacing': 'error',
      '@stylistic/js/template-curly-spacing': [
        'error',
        'always',
      ],
      '@stylistic/js/template-tag-spacing': 'error',
      '@stylistic/js/wrap-iife': 'error',
      '@stylistic/js/yield-star-spacing': [
        'error',
        'after',
      ],
      '@stylistic/plus/indent-binary-ops': [
        'error',
        2,
      ],
      'accessor-pairs': 'error',
      'array-callback-return': 'error',
      camelcase: 'warn',
      'capitalized-comments': [
        'warn',
        'always',
        {
          ignoreConsecutiveComments: true,
          ignoreInlineComments: true,
          ignorePattern: 'pragma|ignored',
        },
      ],
      curly: [
        'error',
        'multi-line',
      ],
      'default-case': 'warn',
      'default-case-last': 'error',
      'dot-notation': 'error',
      eqeqeq: [
        'error',
        'smart',
      ],
      'func-name-matching': 'error',
      'func-style': [
        'error',
        'declaration',
        {
          allowArrowFunctions: true,
        },
      ],
      'grouped-accessor-pairs': 'error',
      'guard-for-in': 'error',
      'logical-assignment-operators': [
        'warn',
        'always',
        {
          enforceForIfStatements: true,
        },
      ],
      'max-classes-per-file': [
        'error',
        {
          ignoreExpressions: true,
          max: 3,
        },
      ],
      'no-await-in-loop': 'error',
      'no-console': 'warn',
      'no-constructor-return': 'error',
      'no-debugger': 'warn',
      'no-duplicate-imports': 'error',
      'no-else-return': [
        'error',
        {
          allowElseIf: false,
        },
      ],
      'no-empty': [
        'error',
        {
          allowEmptyCatch: true,
        },
      ],
      'no-empty-function': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-new-symbol': 'error',
      'no-object-constructor': 'error',
      'no-promise-executor-return': 'error',
      'no-proto': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'warn',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-unneeded-ternary': 'error',
      'no-unreachable-loop': 'error',
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          ignoreRestSiblings: true,
        },
      ],
      'no-use-before-define': [
        'error',
        {
          classes: true,
          functions: false,
          variables: false,
        },
      ],
      'no-useless-assignment': 'error',
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'warn',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'object-shorthand': [
        'error',
        'properties',
      ],
      'one-var': [
        'error',
        {
          initialized: 'never',
          uninitialized: 'consecutive',
        },
      ],
      'operator-assignment': 'error',
      'prefer-arrow-callback': 'warn',
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
        },
      ],
      'prefer-destructuring': 'warn',
      'prefer-exponentiation-operator': 'warn',
      'prefer-named-capture-group': 'warn',
      'prefer-numeric-literals': 'warn',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'warn',
      'prefer-regex-literals': [
        'warn',
        {
          disallowRedundantWrapping: true,
        },
      ],
      'prefer-rest-params': 'warn',
      'prefer-spread': 'warn',
      'prefer-template': 'warn',
      radix: [
        'warn',
        'as-needed',
      ],
      'require-atomic-updates': 'warn',
      'require-await': 'error',
      'sort-keys': [
        'warn',
        'asc',
        {
          natural: true,
        },
      ],
      'sort-vars': 'warn',
      'symbol-description': 'error',
      yoda: [
        'warn',
        'never',
      ],
    },
  },
];
