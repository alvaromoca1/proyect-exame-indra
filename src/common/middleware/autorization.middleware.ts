import { Injectable, NestMiddleware, HttpService, Inject } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AutorizationMiddleware implements NestMiddleware{
    constructor(private authService: AuthService){}

    async use(req: Request, res: Response, next: NextFunction) {
        try {
            const acessToken = req.headers.authorization || req.query.authorization;
            await this.authService.me(acessToken);
            next();
        } catch (error) {
            res.status(401);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ msg: "require authorization en the headers","error":error}));
        }
    }

}