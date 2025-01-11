import React from "react";

function Table1() {
  const data = [
    {
      sr_no: 1,
      subCode: "DSC-C-SMD-111P",
      subName: "Software programing principle",
      credit: 4,
    },
    {
      sr_no: 2,
      subCode: "DSC-C-SMD-111P",
      subName: "Software programing principle",
      credit: 4,
    },
    {
      sr_no: 3,
      subCode: "DSC-C-SMD-111P",
      subName: "Software programing principle",
      credit: 4,
    },
    {
      sr_no: 4,
      subCode: "DSC-C-SMD-111P",
      subName: "Software programing principle",
      credit: 4,
    },
    {
      sr_no: 5,
      subCode: "DSC-C-SMD-111P",
      subName: "Software programing principle",
      credit: 4,
    },
    {
      sr_no: 6,
      subCode: "DSC-C-SMD-111P",
      subName: "Software programing principle",
      credit: 4,
    },
  ];
  return (
    <>
      <div className="mb-2">
        <table className="min-w-[800px] text-white border-separate">
          <tr className="bg-blue-300 rounded-2xl">
            <th className="py-2 px-4 rounded-s-3xl">Sr_no</th>
            <th className="py-2 px-4 text-center">Student Code</th>
            <th className="py-2 px-4 text-center">Student Name</th>
            <th className="py-2 px-4 text-center rounded-e-3xl">Credit</th>
          </tr>

          {data.map((row) => (
            <tr className=" text-white bg-blue-900 m-1">
              <td className="py-2 px-4 rounded-s-3xl">{row.sr_no}</td>
              <td className="py-2 px-4 ">{row.subCode}</td>
              <td className="py-2 px-4 ">{row.subName}</td>
              <td className="py-2 px-4 rounded-e-3xl">{row.credit}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default Table1;
