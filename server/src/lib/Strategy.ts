import passport from "passport";

import { Strategy as JwtStrategy,ExtractJwt,StrategyOptions } from "passport-jwt";
import { config } from "../config";
import { users } from "../services/users.service";



const cookieExtractor = (req: any) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["login"]; // 🍪 bizim cookie adı
  }
  return token;
};

const options:StrategyOptions={
    jwtFromRequest:ExtractJwt.fromExtractors([ExtractJwt.fromAuthHeaderAsBearerToken(),cookieExtractor]),
    secretOrKey:config.JWT_SECRET
} 

passport.use(
    new JwtStrategy(options,async (payload,done)=>{
        try{
            const existingUser =await users.getId(payload.id)
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