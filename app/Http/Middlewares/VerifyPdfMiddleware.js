import path from 'path';

export default (request, response, next) => {

    if (!request.files || !request.files.documento) {
        return response.status(CONSTANTS.HTTP.BAD_REQUEST)
            .json({ error: 'Arquivo não enviado' });
    }

    /** CODAR AQUI */

    next();

}