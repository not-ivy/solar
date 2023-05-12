import { JSX } from "preact";
import { useMemo } from "preact/hooks";
import { identicon } from "https://esm.sh/minidenticons@3.1.2";

interface AvatarProps extends JSX.HTMLAttributes<HTMLImageElement> {
  username: string;
  saturation?: number;
  lightness?: number;
}

export default function Avatar({
  username,
  saturation = 100,
  lightness = 50,
  ...props
}: AvatarProps) {
  const svgURI = useMemo(
    () =>
      "data:image/svg+xml;utf8," +
      encodeURIComponent(identicon(username, saturation, lightness)),
    [username, saturation, lightness]
  );
  return <img src={svgURI} alt={username} {...props} />;
}
