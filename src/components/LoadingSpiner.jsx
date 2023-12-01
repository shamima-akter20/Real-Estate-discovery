
import { RotatingLines } from "react-loader-spinner";

export default function LoadingSpiner() {
  return (
    <div className="flex justify-center items-center my-16">
      <RotatingLines
        strokeColor="teal"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}
