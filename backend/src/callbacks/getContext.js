import Reverso from "reverso-api";

const reverso = new Reverso();

export const getContextRoute = async (req, res) => {
  // firstLanguage and second language for instance English, Russian
  const { text, firstLanguage, secondLanguage } = req.query;

  const context = await reverso.getContext(text, firstLanguage, secondLanguage);

  res.send(context);
};
