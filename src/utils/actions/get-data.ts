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

