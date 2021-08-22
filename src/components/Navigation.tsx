import { useRouter } from "next/router";
import { NavHeader, Switch, useTheme } from "kaidohussar-ui";

export default function Navigation() {
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  return (
    <NavHeader
      alignment="right"
      navItems={[
        {
          title: "About",
          onClick: async (e) => {
            console.log("router push");
            e.preventDefault();
            await router.push("/");
          },
          active: router.pathname === "/",
        },
        {
          title: "Blog",
          onClick: async (e) => {
            console.log("router push");
            e.preventDefault();
            await router.push("/posts");
          },
          active: router.pathname.startsWith("/posts"),
        },
      ]}
      addOn={
        <Switch
          labels={{ left: "Lights ON", right: "Lights OFF" }}
          handleToggle={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        />
      }
    />
  );
}
