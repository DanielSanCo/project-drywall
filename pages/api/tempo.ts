import { NextApiRequest, NextApiResponse } from "next";

async function tempo(request: NextApiRequest, response: NextApiResponse) {
    const dynamicDate = new Date();

    const jokes = await fetch("https://api.chucknorris.io/jokes/categories")
    const jokesJson = await jokes.json();
    const api1 = jokesJson[0]

    response.json(
        {
            date: dynamicDate.toString(),
            api: api1
        }
    )
}

export default tempo;