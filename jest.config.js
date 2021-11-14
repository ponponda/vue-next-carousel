module.exports = {
  testEnvironment: "jsdom",
  testMatch: [
    "**/?(*.)+(spec|test|unit).[jt]s?(x)"
  ],
  transform: {
    "^.+\.[j|t]sx?$": "babel-jest",
    "^.+\.vue?$": "vue-jest",
    "^.+\.tsx$": "ts-jest"
  },
  setupFiles: ["./tests/setup.ts"]
};
