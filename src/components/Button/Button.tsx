/* eslint-disable */

function Button(props: any) {
  return <button {...props} className={"button " + props.className} />;
}

export default Button;
