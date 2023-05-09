export const expirationTime = (): Date => {
  const expirationTime = new Date();

  expirationTime.setHours(expirationTime.getHours() + 1);

  return expirationTime;
};
