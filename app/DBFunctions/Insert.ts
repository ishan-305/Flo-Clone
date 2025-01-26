import { supabase } from "../lib/supabase"; // Import the supabase client

export async function insertIntoProfilesTable(user: any, periodDate: string) {
  try {
    if (!user || !user.id) {
      throw new Error("Invalid user object or user ID");
    }

    console.log("User ID:", user.id);

    // Check if the user already has a row in the profiles table
    const { data, error: selectError } = await supabase
      .from("profiles")
      .select("id")
      .eq("id", user.id)
      .single();

    if (selectError && selectError.code !== "PGRST116") {
      // PGRST116 is the code for no rows found
      throw selectError;
    }

    if (data) {
      // Update the existing row
      const { error: updateError } = await supabase
        .from("profiles")
        .update({ PeriodDate: periodDate })
        .eq("id", user.id);

      if (updateError) {
        throw updateError;
      }

      console.log("PeriodDate updated successfully");
    } else {
      // Insert a new row
      const { error: insertError } = await supabase
        .from("profiles")
        .insert([{ id: user.id, PeriodDate: periodDate }]);

      if (insertError) {
        throw insertError;
      }

      console.log("PeriodDate inserted successfully");
    }
  } catch (error) {
    console.error("Error inserting or updating PeriodDate:", error.message);
  }
}
