import fs from "fs";
import path from "path";
import DocumentoModel from "../../../Models/DocumentoModel.js";

// POST /api/documentos/upload
export default async (request, response) => {
  try {
    // 1) pega o arquivo e o id do usuário autenticado
    const arquivo = request.files?.documento;
    const idUser = request.user?.id;

    if (!arquivo) {
      return response.status(400).json({ mensagem: "Nenhum arquivo enviado." });
    }

    // 2) monta a pasta de destino e cria caso não exista
    const uploadDir = path.resolve("storage", "documents");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // 3) gera nome único para evitar colisões
    const timestamp = Date.now();
    const originalName = arquivo.name;
    const newName = `${timestamp}_${originalName}`;
    const destPath = path.join(uploadDir, newName);

    // 4) move o arquivo para a pasta
    await arquivo.mv(destPath);

    // 5) salva no banco de dados
    const documento = await DocumentoModel.create({
      caminho: newName,
      id_user: idUser,
    });

    // 6) retorna resposta
    return response.status(201).json({
      mensagem: "Documento enviado com sucesso!",
      documento,
    });

  } catch (error) {
    console.error("UploadDocumentoController:", error);
    return response.status(500).json({
      mensagem: "Erro ao enviar documento.",
      erro: error.message,
    });
  }
};
