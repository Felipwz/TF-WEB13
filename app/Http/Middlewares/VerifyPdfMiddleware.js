import path from 'path';

export default (req, res, next) => {
  const arquivo = req.files?.documento;

  if (!arquivo) {
    return res.status(400).json({ error: 'Arquivo não enviado' });
  }

  const ext = path.extname(arquivo.name).toLowerCase();
  if (ext !== '.pdf') {
    return res.status(400).json({ message: 'Apenas arquivos PDF são permitidos.' });
  }

  next();
};
