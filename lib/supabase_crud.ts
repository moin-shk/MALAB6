import supabase from "./supabase";

const TABLE_NAME = "sampledatabase";

export async function getUsers() {
    const { data, error } = await supabase.from("sampledatabase").select("*");
    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }
    console.log("Fetched data:", data);
    return data;
  }

