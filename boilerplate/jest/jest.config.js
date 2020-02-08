const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('../tsconfig.json');

const IS_DEV = process.env.NODE_ENV !== 'production';

module.exports = {
    rootDir: "../",
    preset: 'ts-jest',
    testURL: 'http://localhost/',
    verbose: true,
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testMatch: ['**/*.(test|spec).(ts|tsx)'],
    globals: {
        window: {},
        'ts-jest': {
            babelConfig: true,
            tsConfig: '<rootDir>/jest/jest.tsconfig.json'
        }
    },
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: ['/node_modules/', 'jest.stubs.js'],
    setupFiles: ['<rootDir>/jest/jest.stubs.js'],
    coverageReporters: IS_DEV ? ['text'] : ['json', 'lcov', 'text'],
    moduleNameMapper: {
        ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/jest/__mocks__/fileMock.js'
    }
};
