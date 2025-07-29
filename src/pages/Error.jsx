import React from "react";
import { useRive } from "rive-react";

export default function Error() {
  const { RiveComponent } = useRive({
    src: "animations/404_error_page.riv",
    autoplay: true,
  });
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <RiveComponent
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}





