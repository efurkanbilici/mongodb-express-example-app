const getEnv = (key) => process.env[key];

export const dbConfig = {
  user: getEnv("DB_USER"),
  pass: getEnv("DB_PASS"),
  cluster: getEnv("DB_CLUSTER_URL"),
  name: getEnv("DB_NAME"),
};
