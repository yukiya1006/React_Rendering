import { memo } from "react";
//memo内のコンポ―とネントが変更されない限り再レンダリングは行わないようにする

const style = {
  widht: "100%",
  height: "200px",
  backgroundColor: "red"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリング");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポ―ネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
