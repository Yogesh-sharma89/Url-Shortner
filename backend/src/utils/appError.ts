export  class AppError extends Error{
    public readonly isOperational:boolean;
    public readonly statusCode:number;
    public readonly status:string;

    constructor(statusCode:number,message:string){
        super(message);

        this.statusCode = statusCode;
        this.isOperational = true;

        this.status = `${statusCode}`.startsWith('4') ? "fail":"error";

        Error.captureStackTrace(this,this.constructor);
    }
}