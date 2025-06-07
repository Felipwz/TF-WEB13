import DocumentoModel from "../../../Models/DocumentoModel.js";

//POST /api/documentos/upload
//multiform data
//express file-upload
export default async (request, response) => {

    const arquivo = request.files.documento;
    const idUser = request.user.id;


    /** Codar AQUI */


    return response
        .json({
            mensagem: 'Imagem enviada com sucesso!',
            image: newName
        });


}