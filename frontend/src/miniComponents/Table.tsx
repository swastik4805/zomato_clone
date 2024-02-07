import { BsDot } from "react-icons/bs";

const Table = ({ props }) => {
    return (
        <div>
            {props.map((item, index) => (
            <div className="px-1" key={index} style={{ display: 'inline', alignItems: 'center' }}>
                {item.split(" ").map((it, wordIndex) => (
                    <div className="text-gray-500" key={wordIndex} 
                    style={{ display: 'inline-flex', alignItems: 'center' }}>
                        {wordIndex === 0 ? <BsDot/> : " "}
                        {it}
                    </div>
                ))}
            </div>
        ))}
        </div>
    );
  };
  export default Table;