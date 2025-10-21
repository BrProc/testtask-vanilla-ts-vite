import type { IUser } from "./interfaces/IUser";

export async function getUsers(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("${response.status}");

    const data: IUser[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error operation:", error);
  }
}
