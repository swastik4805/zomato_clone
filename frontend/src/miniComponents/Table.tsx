import { BsDot } from "react-icons/bs";

const Table = ({ props }) => {
    return (
        <div>
            {props.map((item, index) => (
            <div key={index} style={{ display: 'inline', alignItems: 'center' }}>
                {item.split(" ").map((it, wordIndex) => (
                    <div className="text-gray-500 pr-1" key={wordIndex}
                    style={{ display: 'inline-flex', alignItems: 'center' }}>
                        {wordIndex === 0 ? <BsDot style={{height:'13px'}}/> : " "}
                        {it}
                    </div>
                ))}
            </div>
        ))}
        </div>
    );
  };
  export default Table;