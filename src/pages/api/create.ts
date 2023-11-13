// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/clients/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pokemon = req.body.pokemon;

  const { data, error } = await supabase
    .from("pokemon")
    .insert([pokemon])
    .select();

  if (error) {
    res.status(parseInt(error.code)).json({ error: error.message });
  }

  res.status(200).json({ response: data });
}
