import Assets from "./assets";

export type SvgIconName = keyof typeof Assets;

type SvgIconProps = {
  iconName: SvgIconName;
};

const Icons = ({ iconName }: SvgIconProps) => {
  const Asset = Assets[iconName];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Asset />
    </div>
  );
};

export default Icons;
