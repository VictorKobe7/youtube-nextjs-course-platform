import { Header } from "@/components/header/Header";

type ILayout = Readonly<{ children: React.ReactNode }>

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
