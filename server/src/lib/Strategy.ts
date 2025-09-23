import passport from "passport";

import { Strategy as JwtStrategy,ExtractJwt,StrategyOptions } from "passport-jwt";
import pool from "./dbConnect";
import { config } from "../config";
import { users } from "../services/users.service";

const options:StrategyOptions={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:config.JWT_SECRET
}

passport.use(
    new JwtStrategy(options,async (payload,done)=>{
        try{
            const existingUser =await users.getId(payload)
            if(!existingUser){
                return done(null,false)
            }
            return done(null,existingUser)
        }catch(err){
            return done(err,null)
        }
    })
)
export const authenticateJWT = passport.authenticate("jwt", { session: false });

export default passport