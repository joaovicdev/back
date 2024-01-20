export const generateUrlByEnv = (url: string) => {
  // change url to ENV from window object
  const SMLS_ENV = url;

  if (SMLS_ENV === 'dev1') {
    return `https://portal.dev1.smiles.com.br${url}`;
  }

  if (SMLS_ENV && !SMLS_ENV.includes('prd')) {
    return `https://portal-${SMLS_ENV}.smiles.com.br${url}`;
  }

  return `https://www.smiles.com.br${url}`;
};