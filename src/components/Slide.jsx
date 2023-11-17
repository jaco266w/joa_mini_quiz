export default function Slide(props) {
  return (
    <>
      <h3 className="font-bold font-serif text-center text-3xl">
        {props.title}
      </h3>
      {props.children}
    </>
  );
}
