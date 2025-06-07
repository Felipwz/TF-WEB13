/**
 * docs/03-documentoDoc.js
 * Documentação Swagger 2.0 para a rota de upload de documentos
 */
module.exports = {
  swagger: "2.0",
  info: {
    title: "API de Documentos",
    version: "1.0.0",
    description: "Operações de upload de documentos PDF"
  },
  basePath: "/api",
  schemes: ["http", "https"],
  consumes: ["multipart/form-data"],
  produces: ["application/json"],
  paths: {
    "/documentos/upload": {
      post: {
        tags: ["Documentos"],
        summary: "Faz upload de um documento PDF",
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            description: "Token JWT no formato `Bearer <token>`",
            required: true,
            type: "string"
          },
          {
            name: "documento",
            in: "formData",
            description: "Arquivo PDF a ser enviado",
            required: true,
            type: "file"
          }
        ],
        responses: {
          "201": {
            description: "Documento enviado com sucesso",
            schema: {
              $ref: "#/definitions/Documento"
            }
          },
          "400": {
            description: "Requisição inválida (arquivo não enviado ou formato incorreto)",
            schema: {
              type: "object",
              properties: {
                mensagem: {
                  type: "string",
                  example: "Nenhum arquivo enviado."
                }
              }
            }
          },
          "401": {
            description: "Não autorizado (token ausente ou inválido)",
            schema: {
              type: "object",
              properties: {
                mensagem: {
                  type: "string",
                  example: "Token inválido."
                }
              }
            }
          },
          "500": {
            description: "Erro interno no servidor",
            schema: {
              type: "object",
              properties: {
                mensagem: {
                  type: "string",
                  example: "Erro ao enviar documento."
                },
                erro: {
                  type: "string",
                  example: "mensagem de erro detalhada"
                }
              }
            }
          }
        }
      }
    }
  },
  definitions: {
    Documento: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          example: 1
        },
        caminho: {
          type: "string",
          example: "1623456789012_meu_documento.pdf"
        },
        id_user: {
          type: "integer",
          example: 42
        },
        createdAt: {
          type: "string",
          format: "date-time",
          example: "2025-06-07T12:34:56.789Z"
        },
        updatedAt: {
          type: "string",
          format: "date-time",
          example: "2025-06-07T12:34:56.789Z"
        }
      }
    },
    // definição para bearerAuth (JWT)
    securityDefinitions: {
      bearerAuth: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
        description: "Insira o token JWT no formato: Bearer {token}"
      }
    }
  }
};
