import babelParser from '@babel/eslint-parser';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';

export default [
  js.configs.recommended,
  stylistic.configs['recommended-flat'],
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
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/array-bracket-newline': [
        'error',
        {
          multiline: true,
        },
      ],
      '@stylistic/array-element-newline': [
        'error',
        {
          ArrayExpression: 'always',
          ArrayPattern: 'consistent',
        },
      ],
      '@stylistic/arrow-parens': [
        'error',
        'always',
      ],
      '@stylistic/brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true,
        },
      ],
      '@stylistic/comma-dangle': [
        'error',
        'always-multiline',
      ],
      '@stylistic/curly-newline': [
        'error',
        {
          consistent: true,
        },
      ],
      '@stylistic/dot-location': [
        'error',
        'property',
      ],
      '@stylistic/func-call-spacing': 'error',
      '@stylistic/function-paren-newline': [
        'warn',
        'multiline-arguments',
      ],
      '@stylistic/generator-star-spacing': [
        'error',
        {
          after: true,
          before: false,
        },
      ],
      '@stylistic/implicit-arrow-linebreak': [
        'error',
        'beside',
      ],
      '@stylistic/indent': [
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
      '@stylistic/lines-around-comment': [
        'error',
        {
          afterHashbangComment: true,
          beforeBlockComment: false,
        },
      ],
      '@stylistic/max-len': [
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
      '@stylistic/multiline-comment-style': [
        'error',
        'separate-lines',
      ],
      '@stylistic/multiline-ternary': 'off',
      '@stylistic/newline-per-chained-call': 'off',
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-multiple-empty-lines': [
        'error',
        {
          max: 2,
          maxBOF: 0,
          maxEOF: 1,
        },
      ],
      '@stylistic/nonblock-statement-body-position': [
        'error',
        'beside',
        {
          overrides: {
            while: 'below',
          },
        },
      ],
      '@stylistic/object-curly-newline': [
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
      '@stylistic/object-curly-spacing': [
        'error',
        'always',
      ],
      '@stylistic/object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      '@stylistic/one-var-declaration-per-line': 'error',
      '@stylistic/operator-linebreak': [
        'error',
        'before',
        {
          overrides: {
            '=': 'after',
          },
        },
      ],
      '@stylistic/padded-blocks': [
        'error',
        {
          classes: 'always',
        },
        {
          allowSingleLineBlocks: true,
        },
      ],
      '@stylistic/padding-line-between-statements': [
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
      '@stylistic/quote-props': [
        'error',
        'as-needed',
      ],
      '@stylistic/quotes': [
        'error',
        'single',
        {
          allowTemplateLiterals: false,
          avoidEscape: true,
        },
      ],
      '@stylistic/semi': [
        'error',
        'always',
      ],
      '@stylistic/semi-style': 'error',
      '@stylistic/space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          asyncArrow: 'always',
          named: 'never',
        },
      ],
      '@stylistic/spaced-comment': [
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
      '@stylistic/switch-colon-spacing': 'error',
      '@stylistic/template-curly-spacing': [
        'error',
        'always',
      ],
      '@stylistic/yield-star-spacing': [
        'error',
        'after',
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
          max: 4,
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
      'no-new-wrappers': 'error',
      'no-object-constructor': 'error',
      'no-promise-executor-return': 'error',
      'no-proto': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'warn',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-unassigned-vars': 'error',
      'no-undef-init': 'error',
      'no-unmodified-loop-condition': 'warn',
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
