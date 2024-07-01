export async function getDataHome() {
  try {
    // const res = await fetch(`https://api.cosmicjs.com/v3/buckets/devmotors-production-2d68ad80-26ac-11ef-95e0-0de599fdbc6e/objects/666628df5e355cda1437fa18?read_key=MuofsFU8X0buLzrOr9rfEUtZw2dElWfQCn6UsQpzJGRLSuCbeh&depth=1&props=slug,title,metadata`)
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/666628df5e355cda1437fa18?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`,
      { next: { revalidate: 120 } } //a requisição será reaproveitada por 120 segundos
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export async function getSubMenu() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title`,
      { next: { revalidate: 120 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

//pegando item pelo slug
export async function getItemBySlug(itemSlug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;

  //Definindo o objeto de consulta pelo slug
  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: itemSlug,
    }),
    props: "slug, title, content, metadata",
    read_key: process.env.READ_KEY as string,
  });

  //construindo a req com a base url e a pesquisa de slug pela query
  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const res = await fetch(url, { next: { revalidate: 120 } });

    if (!res.ok) {
      throw new Error("Failed get item by slug");
    }

    return res.json();
  } catch (err) {
    throw new Error("Failed get item by slug");
  }
}
