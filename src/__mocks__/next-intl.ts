export const useTranslations = (namespace?: string) => {
  return (key: string) => `${namespace ? `${namespace}.` : ""}${key}`;
};
