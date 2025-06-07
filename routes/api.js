import { Router } from 'express';

import documentosApi from './api/documentosApi.js';

export default (function () {

    const router = Router();

    //documentos
    router.use("/", documentosApi);

    return router;

})();
