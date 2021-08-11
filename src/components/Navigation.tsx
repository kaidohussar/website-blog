import { useRouter } from "next/router";
import { NavHeader, Switch } from "kaidohussar-ui";

export default function Navigation() {
  const router = useRouter();

  return (
    <NavHeader
      alignment="right"
      navItems={[
        {
          title: "About",
          onClick: async () => {
            await router.push("/");
          },
          active: router.pathname.startsWith("/"),
        },
        {
          title: "Blog",
          onClick: async () => {
            await router.push("/posts");
          },
          active: router.pathname.startsWith("/posts"),
        },
      ]}
      addOn={
        <Switch
          labels={{ left: "Lights ON", right: "Lights OFF" }}
          handleToggle={() => {}}
        />
      }
    />
  );
}
