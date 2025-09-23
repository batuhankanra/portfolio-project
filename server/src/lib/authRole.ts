import { Request,Response,NextFunction } from "express"

export const authorizeRole = (role: string) => (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as any; // passport JWT ile req.user
  if (user.role !== role) {
    return res.status(403).json({ error: "Yetkiniz yok." });
  }
  next();
};