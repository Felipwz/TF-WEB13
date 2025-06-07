import { Router } from 'express';
import UploadImageController from '../../app/Http/Controllers/DocumentoApi/UploadDocumentoController.js';
import VerifyPdfMiddleware from '../../app/Http/Middlewares/VerifyPdfMiddleware.js';

export default (function () {

    const router = Router();

    router.post('/documentos/upload', VerifyPdfMiddleware, UploadImageController);

    return router;

})();