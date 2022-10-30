import { NextApiRequest, NextApiResponse } from "next";
import { fetchJson } from "../../lib/api";
import { User } from "../../types";

const { CMS_URL } = process.env;

const handlerUser = async (req: NextApiRequest, res: NextApiResponse): Promise<User> => {
  const jwt = req.cookies.jwt;
  if( !jwt ) {
    res.status(401).end();
    return;
  }
  try {
    const user = await fetchJson(`${CMS_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    res.status(200).json({
      id: user.id,
      name: user.username,
    });
  } catch (error) {
    res.status(401).end();
  }
}

export default handlerUser;