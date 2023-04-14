export const getEnviroments = () => {
  const env = import.meta.env;
  return {
    ...env,
  };
};
