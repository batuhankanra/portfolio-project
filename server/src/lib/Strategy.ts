import passport from "passport";

import { Strategy as JwtStrategy,ExtractJwt,StrategyOptions } from "passport-jwt";
import pool from "./dbConnect";
import { config } from "../config";

const options:StrategyOptions={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:config.JWT_EXPIRES_IN
}

passport.use(
    new JwtStrategy(options,async (payload,done)=>{
        try{
            
        }
    })
)