'use client';
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes"
import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";
const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Switch
        checked={theme === "light"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        endContent={<FiMoon/>}
        size="lg"
        startContent={<FiSun />}
      >
      </Switch>
    </div>
  );
};
export default DarkMode;
