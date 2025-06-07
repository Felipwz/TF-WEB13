import path from 'path';

export default (request, response, next) => {

    if (!request.files || !request.files.documento) {
        return response.status(CONSTANTS.HTTP.BAD_REQUEST)
            .json({ error: 'Arquivo não enviado' });
    }

    const ext = path.extname(req.file.originalname).toLowerCase();
       if (ext !== '.pdf') {
        return res.status(400).json({ message: 'Apenas arquivos PDF são permitidos.' });
  }

    next();

}