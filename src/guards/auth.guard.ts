import { CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { Observable } from "rxjs";

export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const req: Request = context.switchToHttp().getRequest();

        try {
            const token = req.headers.authorization.split(' ')[1];
            console.log(token);

            req.user = this.jwtService.verify(token);
            console.log(req.user);

            if (!req.user) {
                throw new UnauthorizedException();
            }

        } catch (e) {
            console.log(e);
            throw new UnauthorizedException();
        }

        return true;

    }

}