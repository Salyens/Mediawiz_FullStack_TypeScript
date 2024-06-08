"use server";

import { cookies } from "next/headers";

const setLocale = (newLocale: string) => {
  const cookieStore = cookies();
  cookieStore.set("NEXT_LOCALE", newLocale);
};

export default setLocale;
