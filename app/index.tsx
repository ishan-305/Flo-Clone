import { Redirect, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { supabase } from "./lib/supabase";
import { Session } from "@supabase/supabase-js";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.replace("/(tabs)/Today");
      }
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.replace("/screens/TodayScreen");
      } else {
        router.replace("/(tabs)/Promo");
      }
    });
  }, []);
}
