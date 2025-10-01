import { Request,Response,NextFunction } from "express"

export const authorizeRole = (role: string) => (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as any; 
  if (user.role !== role) {
    return res.status(403).json({ error: "Yetkiniz yok." });
  }
  next();
};