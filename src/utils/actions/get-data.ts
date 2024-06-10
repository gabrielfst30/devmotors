export async function getDataHome() {
  try {
    // const res = await fetch(`https://api.cosmicjs.com/v3/buckets/devmotors-production-2d68ad80-26ac-11ef-95e0-0de599fdbc6e/objects/666628df5e355cda1437fa18?read_key=MuofsFU8X0buLzrOr9rfEUtZw2dElWfQCn6UsQpzJGRLSuCbeh&depth=1&props=slug,title,metadata`)
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/666628df5e355cda1437fa18?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}
