import { Request, Response } from "express";

export async function getHomepage(req: Request, res: Response) {
  try {
    return res.send("Hello World")
  } catch (error: any) {
    console.error("Error fetching homepage: ", error.message)
    throw new Error("Error getting homepage data");
  }
}
