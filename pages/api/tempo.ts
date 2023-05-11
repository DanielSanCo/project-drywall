import { NextApiRequest, NextApiResponse } from "next";

async function tempo(request: NextApiRequest, response: NextApiResponse) {
    const dynamicDate = new Date();

    const jokes = await fetch("https://localhost:3000/filmes")
    const jokesJson = await jokes.json();
    const api1 = jokesJson[0].nome

    response.json(
        {
            date: dynamicDate.toString(),
            api: api1
        }
    )
}

export default tempo;