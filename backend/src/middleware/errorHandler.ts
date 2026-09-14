import type { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { AppError } from "../utils/appError.js";
import EnvConfig from "../config/env.config.js";

const handleJWTError = () => new AppError(401, 'Malware token manipulation detected. Unauthorized.');

// Helper 5: Handle Timed-out/Expired Authorization Cookies
const handleJWTExpiredError = () => new AppError(401, 'Your login session has expired. Please log in again.');



const sendErrorDev = (err: AppError, res: Response) => {

    return res.status(err.statusCode || 500).json({
        success: false,
        status: err.status || 'error',
        message: err.message,
        stack: err.stack,
        error: err
    });
};

const sendErrorProd = (err: AppError, res: Response) => {

    if (err.isOperational) {
        return res.status(err.statusCode).json({
            success: false,
            status: err.status,
            message: err.message
        });
    }

    console.error('🚨 CRITICAL SYSTEM CRASH:', err);

    return res.status(500).json({
        success: false,
        status: 'error',
        message: 'An unexpected internal server error occurred.'
    });
};



const GlobalErrorhandler: ErrorRequestHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {

    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (EnvConfig.env === 'development') {
        sendErrorDev(err, res);
    } else {

        let error = { ...err };
        error.message = err.message;
        error.stack = err.stack;

        if (err.name === 'JsonWebTokenError') error = handleJWTError();
        if (err.name === 'TokenExpiredError') error = handleJWTExpiredError();

        sendErrorProd(error,res);
    }
}

export default GlobalErrorhandler;