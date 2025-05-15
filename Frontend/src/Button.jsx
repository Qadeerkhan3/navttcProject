
export default function Button({title,onClick="",className="",cssClass=""}) {
  return (
    <button className={`btn btn-${className} ${cssClass}`} onClick={onClick}>{title}</button>
)
}
