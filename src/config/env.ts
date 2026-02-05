function getEnvVar(key: string): string {
    const value = import.meta.env[key];

    if (!value) {
        throw new Error(`Variável de ambiente ${key} não definida`);
    }

    return value;
}

export const API_URL = getEnvVar('VITE_URL_API');