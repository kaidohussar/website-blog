import { useRouter } from "next/router";
import { NavHeader, Switch, useTheme } from "kaidohussar-ui";

export default function Navigation() {
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  console.log("router", router);
  return (
    <NavHeader
      alignment="right"
      navItems={[
        {
          title: "About",
          onClick: (e) => {
            console.log("router push");
            e.preventDefault();
            router.push("/", undefined, { shallow: true });
          },
          active: router.pathname === "/",
        },
        {
          title: "Blog",
          onClick: (e) => {
            console.log("router push");
            e.preventDefault();
            router.push("/posts", undefined, { shallow: true });
          },
          active: router.pathname.startsWith("/posts"),
        },
      ]}
      addOn={
        <Switch
          labels={{ left: "Lights ON", right: "Lights OFF" }}
          isToggled={theme === "dark"}
          handleToggle={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        />
      }
    />
  );
}
