import "./Dropdown.scss";

type PropsItem = {
  title: string;
  icon?: Object;
  item1?: string;
  item2?: string;
  item3?: string;
  item4?: string;
  item5?: string;
  item6?: string;
  item7?: string;
};

export default function Dropdown(props: PropsItem) {
  return (
    <>
      <ul className="dropdown">
        <li>
          <div className="dropdown-title">
            <span>{props.title}</span>
            {props.icon}
          </div>
          <ul className="dropdown__sub-menu">
            <li>
              <span>{props.item1}</span>
            </li>
            <li>
              <span>{props.item2}</span>
            </li>
            <li>
              <span>{props.item3}</span>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
