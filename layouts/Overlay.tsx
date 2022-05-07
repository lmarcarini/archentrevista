import TopMenu from "../components/TopMenu";

type Props = {
  children: React.ReactNode;
};

function Overlay({ children }: Props) {
  return (
    <>
      <TopMenu></TopMenu>
      <div>{children}</div>
    </>
  );
}

export default Overlay;
