import express, { Application, NextFunction, Request, Response } from 'express';
import path from 'path';
import router from './router/apiRouter';
import globalErrorHandler from './middleware/globalErrorHandler';
import responseMessage from './constant/responseMessage';
import httpError from './util/httpError';

const app: Application = express();

//middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));

//routes
app.use('/api/v1', router);

//404 not found
app.use((req: Request, _: Response, next: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND('route'));
    } catch (error) {
        httpError(next, error, req, 404);
    }
});

//global error handler
app.use(globalErrorHandler);
export default app;
