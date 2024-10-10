// module.exports = {
//     root: true,
//     parser: '@typescript-eslint/parser',
//     plugins: ['@typescript-eslint', 'import', 'graphql', 'prettier'],
//     extends: [
//         'react-app',
//         'eslint:recommended',
//         'plugin:@typescript-eslint/eslint-recommended',
//         'plugin:@typescript-eslint/recommended',
//         'plugin:import/typescript',
//         'prettier',
//     ],
//     ignorePatterns: ['**/.serverless/*', '**/node_modules/*', '**/generated-*', '**/*snapshot.spec.ts'],
//     settings: {
//         'import/internal-regex': '^@suite/',
//         react: { version: '17' },
//     },
//     rules: {
//         'prettier/prettier': 'error',
//         'import/no-duplicates': 'error',
//         'import/order': [
//             'error',
//             {
//                 groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
//                 pathGroups: [
//                     {
//                         pattern: 'src/**',
//                         group: 'internal',
//                         position: 'before',
//                     },
//                 ],
//                 pathGroupsExcludedImportTypes: ['src/**'],
//             },
//         ],
//         '@typescript-eslint/no-unused-vars': [
//             'warn',
//             {
//                 varsIgnorePattern: '^_',
//                 argsIgnorePattern: '^_',
//                 ignoreRestSiblings: true,
//             },
//         ],
//         '@typescript-eslint/no-namespace': 'off',
//         '@typescript-eslint/no-empty-function': 'off',
//         'no-restricted-syntax': [
//             'error',
//             {
//                 selector: 'ForInStatement',
//                 message:
//                     'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
//             },
//         ],
//     },
//     overrides: [
//         {
//             // .js files can still use "require()" import syntax.
//             files: ['*.js'],
//             rules: {
//                 '@typescript-eslint/no-var-requires': 'off',
//             },
//         },
//         {
//             // Restricted imports for dashboard code.
//             files: ['packages/dashboard/**'],
//             rules: {
//                 'no-restricted-imports': ['error', { patterns: restrictedImportPatterns }],
//             },
//         },
//         {
//             // Restricted imports for platform code.
//             files: ['packages/!(dashboard)/**'],
//             rules: {
//                 'no-restricted-imports': ['error', { patterns: platformRestrictedImportPatterns }],
//             },
//         },
//         {
//             // Additional linting for tests.
//             files: ['**/*.spec.js*', '**/*.spec.ts*'],
//             plugins: ['jest'],
//             extends: ['plugin:jest/recommended'],
//             rules: {
//                 'jest/no-conditional-expect': 'off',
//                 'jest/consistent-test-it': ['error', { fn: 'test' }],
//                 'jest/no-confusing-set-timeout': 'error',
//                 'jest/no-test-return-statement': 'error',
//                 'jest/no-untyped-mock-factory': 'error',
//                 'jest/prefer-hooks-on-top': 'error',
//                 'jest/expect-expect': [
//                     'error',
//                     { assertFunctionNames: ['expect*', '*.expect*', 'assert*', '*.assert*'] },
//                 ],
//             },
//         },
//     ],
// };
