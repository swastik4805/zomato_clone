const Table = ({ props }) => {
    // Split the list of cities into rows and columns
    const rows = [];
    const columns = 5;
  
    for (let i = 0; i < props.length; i += columns) {
      rows.push(props.slice(i, i + columns));
    }
  
    return (
            <table className="flex justify-center items-center">
                <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                    {row.map((prop, colIndex) => (
                        <td className="justify-center px-3 md:px-12 text-sm" key={colIndex}>{prop}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
    );
  };
  
  export default Table;