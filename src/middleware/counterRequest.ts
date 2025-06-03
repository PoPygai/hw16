import { Response, NextFunction } from 'express';
import {AuthRequest, Role} from "../utils/libTypes.js";
import {skipPaths} from "../config/libConfig.js";


// type UserCounter = {
//     username:{
//         count: number,
//         timestamp: number,
//     }
// }
// let userRequestCounts:UserCounter[] = []

const userRequestCounts = new Map<string, { count: number; timestamp: number }>();

export const rateLimitMiddleware = (Limits_Requests:Record<string, number>) =>
    (req: AuthRequest, res: Response, next: NextFunction) => {

        const pathMethod = req.method + req.path;
        if(skipPaths.includes(pathMethod))
            return next();


        const { username, roles } = req;

        if (!username || !roles) {
            throw new Error(JSON.stringify({status: 401, message:""}))
        }

        if (roles.includes(Role.PREMIUM_USER)) {
            return next();
        }

        if (roles.includes(Role.USER)) {
            const currentTime = Date.now();
            const windowSize = 60 * 1000; // 1 минута
            const limit = Limits_Requests.USER;

            const userData = userRequestCounts.get(username);

            if (!userData || currentTime - userData.timestamp > windowSize) {

                userRequestCounts.set(username, {
                    count: 1,
                    timestamp: currentTime,
                });
            } else {
                if (userData.count >= limit)
                    throw new Error(JSON.stringify({status:403,message:"your requests are over"}))

                userData.count++;
            }

            return next();
        }

        throw new Error(JSON.stringify({status: 404, message:"Problem with account role"}))
    };
