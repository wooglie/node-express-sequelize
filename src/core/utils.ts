import { Response } from "express";

export const Respond = (res: Response, data?: any) => res.status(200).json({ success: true, data })
