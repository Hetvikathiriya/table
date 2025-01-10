import React from 'react';

function App() {
    const data = [
      { sr_no:1,subCode:"DSC-C-SMD-111P",subName:"Software programing principle",credit:4 },
      { sr_no:2,subCode:"DSC-C-SMD-111P",subName:"Software programing principle",credit:4 },
      { sr_no:3,subCode:"DSC-C-SMD-111P",subName:"Software programing principle",credit:4 },
      { sr_no:4,subCode:"DSC-C-SMD-111P",subName:"Software programing principle",credit:4 },
      { sr_no:5,subCode:"DSC-C-SMD-111P",subName:"Software programing principle",credit:4 },
      { sr_no:6,subCode:"DSC-C-SMD-111P",subName:"Software programing principle",credit:4 },
  
    ];
    return (
      <>
        <div>
        <table className="bg-blue-950 text-white table-auto rounded-2xl">
          {/* <thead className="bg-gray-200 border-b"> */}
            <tr className='bg-blue-300'>
              <th className="py-2 px-4 text-left">Sr_no</th>
              <th className="py-2 px-4 text-left">Student Code</th>
              <th className="py-2 px-4 text-left">Student Name</th>
              <th className="py-2 px-4 text-left">Credit</th>
            </tr>
          {/* </thead> */}
          {/* <tbody> */}
            {data.map((row) => (
              <tr className="border-2 " >
                <td className="py-2 px-4">{row.sr_no}</td>
                <td className="py-2 px-4">{row.subCode}</td>
                <td className="py-2 px-4">{row.subName}</td>
                <td className="py-2 px-4">{row.credit}</td>
              </tr>
            ))}
          {/* </tbody> */}
        </table>
      </div>
      </>
    )
  }
  
  export default App
  